"use client";
import { useEffect } from "react";

// Kasih tau TypeScript kalo THREE itu ada dari CDN
declare const THREE: any;

export const useAnimations = () => {
  useEffect(() => {
    // Variabel buat nyimpen ID animasi, berguna buat cleanup
    let faviconReqId: number;
    let particleReqId: number;

    // ==========================================
    // 1. 3D FAVICON LOGIC
    // ==========================================
    const init3dFavicon = () => {
      if (typeof THREE === "undefined") {
        console.warn("Three.js belum ke-load");
        return;
      }
      const faviconLink = document.getElementById("favicon") as HTMLLinkElement;
      if (!faviconLink) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(64, 64);

      const geometry = new THREE.IcosahedronGeometry(0.8, 0);
      const pointsMaterial = new THREE.PointsMaterial({
        color: 0xa374ff,
        size: 0.1,
        sizeAttenuation: true,
      });
      const points = new THREE.Points(geometry, pointsMaterial);

      const wireframeGeometry = new THREE.WireframeGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.4,
      });
      const wireframe = new THREE.LineSegments(wireframeGeometry, lineMaterial);

      const group = new THREE.Group();
      group.add(points);
      group.add(wireframe);
      scene.add(group);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);
      camera.position.z = 1.5;

      const animateFavicon = () => {
        faviconReqId = requestAnimationFrame(animateFavicon);
        group.rotation.x += 0.01;
        group.rotation.y += 0.015;
        group.rotation.z += 0.005;
        renderer.render(scene, camera);
        faviconLink.href = renderer.domElement.toDataURL();
      };
      animateFavicon();
    };

    // ==========================================
    // 2. PARTICLE CANVAS LOGIC
    // ==========================================
    const initParticleAnimation = () => {
      const canvas = document.getElementById("particle-canvas") as HTMLCanvasElement;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);
      let particles: any[] = [];
      let time = 0;

      const mouse = { x: 0, y: 0, radius: 120 };

      const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };
      window.addEventListener("mousemove", handleMouseMove);

      class Particle {
        x: number; y: number; baseX: number; baseY: number; size: number; density: number;
        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
          this.baseX = x;
          this.baseY = y;
          this.size = 1.5;
          this.density = Math.random() * 20 + 5;
        }
        draw(color: string) {
          if (!ctx) return;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }
        update() {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * this.density;
            this.y -= (dy / distance) * force * this.density;
          } else {
            if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 20;
            if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 20;
          }
        }
      }

      function initParticles() {
        particles = [];
        const spacing = 70;
        const cols = Math.floor(width / spacing);
        const rows = Math.floor(height / spacing);
        const xOffset = (width - cols * spacing) / 2 + spacing / 2;
        const yOffset = (height - rows * spacing) / 2;

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            particles.push(new Particle(x * spacing + xOffset, y * spacing + yOffset));
          }
        }
      }

      function animateParticles() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        time += 0.002;

        const pulse = (Math.sin(time) + 1) / 2;
        const opacity = 0.1 + pulse * 0.3;

        // Cek dark mode (kalo lo nerapin tema ntar)
        const isDarkMode = document.body.classList.contains("dark-mode");
        const dotColor = isDarkMode ? `rgba(179, 136, 255, ${opacity})` : `rgba(163, 116, 255, ${opacity})`;
        const lineColor = isDarkMode ? "rgba(179, 136, 255, 0.03)" : "rgba(163, 116, 255, 0.03)";

        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 0.5;

        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw(dotColor);

          for (let j = i; j < particles.length; j++) {
            let distance = Math.sqrt(
              Math.pow(particles[i].x - particles[j].x, 2) + Math.pow(particles[i].y - particles[j].y, 2)
            );
            if (distance < 80) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        particleReqId = requestAnimationFrame(animateParticles);
      }

      const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
      };
      window.addEventListener("resize", handleResize);

      initParticles();
      animateParticles();

      // Fungsi buat balikin event handler supaya bisa di-cleanup
      return { handleMouseMove, handleResize };
    };

    // JALANKAN ANIMASI
    init3dFavicon();
    const particleHandlers = initParticleAnimation();

    // ==========================================
    // CLEANUP (Penting di React)
    // ==========================================
    return () => {
      cancelAnimationFrame(faviconReqId);
      cancelAnimationFrame(particleReqId);
      if (particleHandlers) {
        window.removeEventListener("mousemove", particleHandlers.handleMouseMove);
        window.removeEventListener("resize", particleHandlers.handleResize);
      }
    };
  }, []);
};