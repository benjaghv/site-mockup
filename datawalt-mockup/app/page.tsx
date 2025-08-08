'use client';

import Image from "next/image";
import Navbar from "./components/Navbar";
import ClickSpark from "./components/ClickSpark";
import { useState } from "react";

export default function Home() {
  const [isDashboardHovered, setIsDashboardHovered] = useState(false);
  const [videoModal, setVideoModal] = useState<null | 'bi' | 'heuristics' | 'agents'>(null);

  const openVideo = (key: 'bi' | 'heuristics' | 'agents') => setVideoModal(key);
  const closeVideo = () => setVideoModal(null);

  const scrollToProducts = () => {
    const productosSection = document.getElementById('productos');
    if (productosSection) {
      const offsetTop = productosSection.offsetTop - 100; // 100px más arriba
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ClickSpark />
      <Navbar />

            {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 pt-24 sm:pt-28 lg:pt-40">
        {/* Layout Mobile: Flujo vertical */}
        <div className="block lg:hidden">
          {/* Texto del Hero */}
          <div className="text-left mb-6">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: 'var(--datawalt-purple)' }}>
              Hacemos visible 
              <span className="block" style={{ color: 'var(--datawalt-red)' }}>
                lo invisible
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed" style={{ color: 'var(--datawalt-purple)' }}>
              Potencia tu negocio controlando el presente y el futuro de tus datos con DataWalt.
            </p>
            <div className="mt-2 mb-4 sm:mb-6">
              {/* Mini logos escondidos temporalmente */}
              <span className="italic text-sm sm:text-base" style={{ color: 'var(--datawalt-red)' }}>
                Más de 60 empresas ya están tomando las mejores decisiones con DataWalt
              </span>
            </div>
          </div>

          {/* Dashboard en móvil */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 shadow-2xl">
              {/* Header del Dashboard */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white text-xs font-medium">DataWalt BI Dashboard</div>
              </div>

              {/* Contenido del Dashboard */}
              <div className="space-y-3">
                {/* Métricas principales */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-600 rounded-lg p-2">
                    <div className="text-blue-100 text-xs">Ventas</div>
                    <div className="text-white text-lg font-bold">$2.4M</div>
                    <div className="text-green-400 text-xs">↗ +12%</div>
                  </div>
                  <div className="bg-purple-600 rounded-lg p-2">
                    <div className="text-purple-100 text-xs">Usuarios</div>
                    <div className="text-white text-lg font-bold">48.2K</div>
                    <div className="text-green-400 text-xs">↗ +8%</div>
                  </div>
                  <div className="bg-red-600 rounded-lg p-2">
                    <div className="text-red-100 text-xs">Conversión</div>
                    <div className="text-white text-lg font-bold">3.8%</div>
                    <div className="text-green-400 text-xs">↗ +0.3%</div>
                  </div>
                </div>

                {/* Gráfico simulado */}
                <div className="bg-gray-700 rounded-lg p-2 h-24 flex items-end justify-between">
                  <div className="bg-blue-500 w-2 h-6 rounded-t"></div>
                  <div className="bg-blue-500 w-2 h-12 rounded-t"></div>
                  <div className="bg-blue-500 w-2 h-8 rounded-t"></div>
                  <div className="bg-blue-500 w-2 h-14 rounded-t"></div>
                  <div className="bg-blue-500 w-2 h-16 rounded-t"></div>
                  <div className="bg-blue-500 w-2 h-12 rounded-t"></div>
                  <div className="bg-blue-500 w-2 h-18 rounded-t"></div>
                  <div className="bg-blue-500 w-2 h-10 rounded-t"></div>
                </div>

                {/* Lista de datos */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Satisfacción</span>
                    <span className="text-white font-medium">92%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Retención</span>
                    <span className="text-white font-medium">87%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">ROI</span>
                    <span className="text-white font-medium">245%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botones en móvil */}
          <div className="flex flex-col gap-3">
            <button 
              className="px-6 py-3 text-white rounded-3xl font-semibold text-base transition-[box-shadow,border-radius,background-color,opacity] duration-300 ease-in-out hover:rounded-xl hover:shadow-lg hover:opacity-95 w-full"
              style={{ backgroundColor: 'var(--datawalt-red)', willChange: 'transform, border-radius, box-shadow, background-color, opacity' }}
              onMouseEnter={() => setIsDashboardHovered(true)}
              onMouseLeave={() => setIsDashboardHovered(false)}
            >
              Agenda una demo gratuita
            </button>
            <button 
              className="px-6 py-3 border-2 rounded-3xl font-semibold text-base transition-[box-shadow,border-radius,background-color,opacity] duration-300 ease-in-out hover:bg-gray-50 hover:rounded-xl hover:shadow-md w-full"
              style={{ 
                borderColor: 'var(--datawalt-purple)', 
                color: 'var(--datawalt-purple)',
                willChange: 'transform, border-radius, box-shadow, background-color, opacity'
              }}
              onMouseEnter={() => setIsDashboardHovered(true)}
              onMouseLeave={() => setIsDashboardHovered(false)}
              onClick={scrollToProducts}
            >
              Ver productos
            </button>
          </div>
        </div>

        {/* Layout Desktop: Grid de dos columnas */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto del Hero - Lado Izquierdo */}
          <div className="text-left">
            <h1 className="text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--datawalt-purple)' }}>
              Hacemos visible 
              <span className="block" style={{ color: 'var(--datawalt-red)' }}>
                lo invisible
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ color: 'var(--datawalt-purple)' }}>
              Potencia tu negocio controlando el presente y el futuro de tus datos con DataWalt.
            </p>
            <div className="mt-2 mb-6">
              {/* Mini logos escondidos temporalmente */}
              <span className="italic text-base" style={{ color: 'var(--datawalt-red)' }}>
                Más de 60 empresas ya están tomando las mejores decisiones con DataWalt
              </span>
            </div>
            <div className="flex gap-4">
              <button 
              className="px-8 py-4 text-white rounded-3xl font-semibold text-lg transition-[box-shadow,border-radius,background-color,opacity] duration-300 ease-in-out hover:rounded-xl hover:shadow-lg hover:opacity-95"
                style={{ backgroundColor: 'var(--datawalt-red)', willChange: 'transform, border-radius, box-shadow, background-color, opacity' }}
                onMouseEnter={() => setIsDashboardHovered(true)}
                onMouseLeave={() => setIsDashboardHovered(false)}
              >
                Agenda una demo gratuita
              </button>
              <button 
              className="px-8 py-4 border-2 rounded-3xl font-semibold text-lg transition-[box-shadow,border-radius,background-color,opacity] duration-300 ease-in-out hover:bg-gray-50 hover:rounded-xl hover:shadow-md"
                style={{ 
                  borderColor: 'var(--datawalt-purple)', 
                  color: 'var(--datawalt-purple)',
                  willChange: 'transform, border-radius, box-shadow, background-color, opacity'
                }}
                onMouseEnter={() => setIsDashboardHovered(true)}
                onMouseLeave={() => setIsDashboardHovered(false)}
                onClick={scrollToProducts}
              >
                Ver productos
              </button>
            </div>
          </div>

          {/* Dashboard Interactivo - Lado Derecho */}
          <div className={`relative group ${isDashboardHovered ? 'hover-active' : ''}`}>
            {/* Dashboard Principal */}
            <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-2xl transform transition-transform duration-300 ${
              isDashboardHovered ? 'scale-105' : 'group-hover:scale-105'
            }`}>
              {/* Header del Dashboard */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white text-xs sm:text-sm font-medium">DataWalt BI Dashboard</div>
              </div>

              {/* Contenido del Dashboard */}
              <div className="space-y-3 sm:space-y-4">
                {/* Métricas principales */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="bg-blue-600 rounded-lg p-2 sm:p-4">
                    <div className="text-blue-100 text-xs sm:text-sm">Ventas</div>
                    <div className="text-white text-lg sm:text-2xl font-bold">$2.4M</div>
                    <div className="text-green-400 text-xs">↗ +12%</div>
                  </div>
                  <div className="bg-purple-600 rounded-lg p-2 sm:p-4">
                    <div className="text-purple-100 text-xs sm:text-sm">Usuarios</div>
                    <div className="text-white text-lg sm:text-2xl font-bold">48.2K</div>
                    <div className="text-green-400 text-xs">↗ +8%</div>
                  </div>
                  <div className="bg-red-600 rounded-lg p-2 sm:p-4">
                    <div className="text-red-100 text-xs sm:text-sm">Conversión</div>
                    <div className="text-white text-lg sm:text-2xl font-bold">3.8%</div>
                    <div className="text-green-400 text-xs">↗ +0.3%</div>
                  </div>
                </div>

                {/* Gráfico simulado */}
                <div className="bg-gray-700 rounded-lg p-2 sm:p-4 h-24 sm:h-32 flex items-end justify-between">
                  <div className="bg-blue-500 w-2 sm:w-4 h-6 sm:h-8 rounded-t"></div>
                  <div className="bg-blue-500 w-2 sm:w-4 h-12 sm:h-16 rounded-t"></div>
                  <div className="bg-blue-500 w-2 sm:w-4 h-8 sm:h-12 rounded-t"></div>
                  <div className="bg-blue-500 w-2 sm:w-4 h-14 sm:h-20 rounded-t"></div>
                  <div className="bg-blue-500 w-2 sm:w-4 h-16 sm:h-24 rounded-t"></div>
                  <div className="bg-blue-500 w-2 sm:w-4 h-12 sm:h-16 rounded-t"></div>
                  <div className="bg-blue-500 w-2 sm:w-4 h-18 sm:h-28 rounded-t"></div>
                  <div className="bg-blue-500 w-2 sm:w-4 h-10 sm:h-14 rounded-t"></div>
                </div>

                {/* Lista de datos */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Ventas Directas</span>
                    <span className="text-white font-medium">45%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Distribuidores</span>
                    <span className="text-white font-medium">38%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Exportaciones</span>
                    <span className="text-white font-medium">17%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjetas emergentes en hover - Solo visible en desktop */}
            <div className={`hidden lg:block absolute -top-8 -left-8 transition-all duration-500 transform ${
              isDashboardHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-lg shadow-xl p-3 w-52 border-2 border-purple-300 hover:border-purple-500 transition-colors">
                <div className="text-sm font-semibold text-gray-700 mb-2">Heuristics</div>
                <div className="rounded h-24 overflow-hidden border border-gray-200">
                  <img 
                    src="/assets/Dashboard-Heu.png" 
                    alt="Heuristics - Predicciones IA" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <span className="text-xs text-gray-600">Predicciones IA</span>
                </div>
              </div>
            </div>

            <div className={`hidden lg:block absolute -bottom-8 -left-16 transition-all duration-700 transform ${
              isDashboardHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-lg shadow-xl p-3 w-52 border-2 hover:border-red-500 transition-colors" style={{ borderColor: 'var(--datawalt-red)' }}>
                <div className="text-sm font-semibold text-gray-700 mb-2">Agents</div>
                <div className="rounded h-24 overflow-hidden border border-gray-200">
                  <img 
                    src="/assets/Agent.png" 
                    alt="Agents - Agentes IA" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <span className="text-xs text-gray-600">Agentes IA</span>
                </div>
              </div>
            </div>

            <div className={`hidden lg:block absolute top-1/2 -right-12 transition-all duration-600 transform ${
              isDashboardHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
            }`}>
              <div className="bg-white rounded-lg shadow-xl p-3 w-52 border-2 border-cyan-300 hover:border-cyan-500 transition-colors">
                <div className="text-sm font-semibold text-gray-700 mb-2">Reportes</div>
                <div className="rounded h-24 overflow-hidden border border-gray-200">
                  <img 
                    src="/assets/Dashboard-BI.png" 
                    alt="Reportes - Automatización BI" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <span className="text-xs text-gray-600">Reportes Automáticos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="font-semibold" style={{ color: 'var(--datawalt-purple)' }}>
                {videoModal === 'bi' && 'BI: Vista rápida (1 min)'}
                {videoModal === 'heuristics' && 'Heuristics: Vista rápida (1 min)'}
                {videoModal === 'agents' && 'Agents: Vista rápida (1 min)'}
              </div>
              <button onClick={closeVideo} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="aspect-video bg-black">
              {/* Placeholder: reemplazar src por video real cuando esté disponible */}
              <video className="w-full h-full" controls poster="/assets/Dashboard-BI.png">
                <source src="" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Social Proof - Empresas que confían en nosotros */}
      <section className="py-16 overflow-hidden">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg font-medium">Empresas que confían en nosotros</p>
        </div>
        
        {/* Desktop: Una fila con scroll infinito fluido - 12 empresas */}
        <div className="hidden md:block relative overflow-hidden">
          {/* Gradientes para fade en los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex animate-scroll-right whitespace-nowrap">
            {/* Primera instancia completa */}
            <div className="flex items-center shrink-0">
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>COCA-COLA ANDINA</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>ENAEX</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>CANONTEX</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>IANSA</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>O'NEILL</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>TTM</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>BAGÓ</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>ELECMETAL</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>JANSSEN</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>ROTORTEC</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>ENDOS</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>TRAIL</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>MEGAMEDIA</div>
                </div>
              </div>
            </div>
            
            {/* Segunda instancia idéntica para loop infinito perfecto */}
            <div className="flex items-center shrink-0">
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>COCA-COLA ANDINA</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>ENAEX</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>CANONTEX</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>IANSA</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>O'NEILL</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>TTM</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>BAGÓ</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>ELECMETAL</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>JANSSEN</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>ROTORTEC</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>ENDOS</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>TRAIL</div>
                </div>
              </div>
              <div className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center justify-center h-16">
                  <div className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>MEGAMEDIA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Dos filas con scroll infinito */}
        <div className="block md:hidden overflow-hidden">
          {/* Primera fila móvil - scroll derecha */}
          <div className="relative mb-4">
            <div className="flex animate-scroll-right whitespace-nowrap py-2">
              <div className="flex items-center shrink-0">
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>COCA-COLA ANDINA</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>ENAEX</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>CANONTEX</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>IANSA</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>O'NEILL</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>TTM</div>
                  </div>
                </div>
              </div>
              
              {/* Duplicado para loop infinito */}
              <div className="flex items-center shrink-0">
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>COCA-COLA ANDINA</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>ENAEX</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>CANONTEX</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>IANSA</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>O'NEILL</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>TTM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Segunda fila móvil - scroll izquierda */}
          <div className="relative">
            <div className="flex animate-scroll-left whitespace-nowrap py-2">
              <div className="flex items-center shrink-0">
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>BAGÓ</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>ELECMETAL</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>JANSSEN</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>ROTORTEC</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>ENDOS</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>TRAIL</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>MEGAMEDIA</div>
                  </div>
                </div>
              </div>
              
              {/* Duplicado para loop infinito */}
              <div className="flex items-center shrink-0">
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>BAGÓ</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>ELECMETAL</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>JANSSEN</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>ROTORTEC</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>ENDOS</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>TRAIL</div>
                  </div>
                </div>
                <div className="mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="flex items-center justify-center h-12">
                    <div className="text-sm font-bold" style={{ color: 'var(--datawalt-purple)' }}>MEGAMEDIA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="productos" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: 'var(--datawalt-purple)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">Tres productos para resolver tus problemas de datos</h2>
            <p className="text-lg sm:text-xl text-gray-300">Sin jerga técnica. Sin fricción. Con resultados medibles.</p>
          </div>

        {/* BI Feature */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                BI: Visualiza el presente
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6">
                Convierte tus datos en dashboards claros, automáticos y compartibles.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Dashboards interactivos que revelan tendencias y outliers
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Reportes automáticos en tiempo real (sin Excel)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Métricas y definiciones unificadas para todo el equipo
                </li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  className="px-6 py-3 text-white rounded-lg font-medium hover:opacity-90"
                  style={{ backgroundColor: 'var(--datawalt-red)' }}
                >
                  Descubre BI
                </button>
                <button
                  onClick={() => openVideo('bi')}
                  className="px-6 py-3 w-full sm:w-auto border-2 border-white text-white rounded-3xl font-semibold transition-[box-shadow,border-radius,background-color,opacity] duration-300 ease-in-out hover:rounded-xl hover:bg-white hover:text-[var(--datawalt-purple)] hover:shadow-md"
                >
                  Ver video
                </button>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 sm:p-6 flex items-center justify-center order-first lg:order-last">
              <img 
                src="/assets/Dashboard-BI.png" 
                alt="Dashboard BI - Data Visualization" 
                className="w-full h-auto object-contain rounded-lg max-w-full"
              />
            </div>
          </div>
        </div>

        {/* Heuristics Feature */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                Heuristics: Predice y optimiza
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6">
                Modelos que anticipan demanda, flujo de caja y ayudan a asignar recursos.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Predicciones de demanda y cashflow con intervaloz de confianza
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Optimización de inventario, rutas y procesos
          </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Machine Learning aplicado a problemas de negocio reales
          </li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  className="px-6 py-3 text-white rounded-lg font-medium hover:opacity-90"
                  style={{ backgroundColor: 'var(--datawalt-red)' }}
                >
                  Descubre Heuristics
                </button>
                <button
                  onClick={() => openVideo('heuristics')}
                  className="px-6 py-3 w-full sm:w-auto border-2 border-white text-white rounded-3xl font-semibold transition-[box-shadow,border-radius,background-color,opacity] duration-300 ease-in-out hover:rounded-xl hover:bg-white hover:text-[var(--datawalt-purple)] hover:shadow-md"
                >
                  Ver video
                </button>
              </div>
            </div>
            <div className="lg:order-1 bg-gray-100 rounded-lg p-4 sm:p-6 flex items-center justify-center order-first lg:order-first">
              <img 
                src="/assets/Dashboard-Heu.png" 
                alt="Dashboard Heuristics - Forecasting & ML" 
                className="w-full h-auto object-contain rounded-lg max-w-full"
              />
            </div>
          </div>
        </div>

        {/* Agents Feature */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                Agents: Agentes LLM para tu negocio
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6">
                Asistentes entrenados con tu conocimiento que entienden tu contexto y ejecutan tareas.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Responden preguntas sobre tus datos y procesos
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Automatizan tareas repetitivas (tickets, resúmenes, consultas)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Entienden tu jerga interna y políticas de tu organización
                </li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  className="px-6 py-3 text-white rounded-lg font-medium hover:opacity-90"
                  style={{ backgroundColor: 'var(--datawalt-red)' }}
                >
                  Descubre Agents
                </button>
                <button
                  onClick={() => openVideo('agents')}
                  className="px-6 py-3 w-full sm:w-auto border-2 border-white text-white rounded-3xl font-semibold transition-[box-shadow,border-radius,background-color,opacity] duration-300 ease-in-out hover:rounded-xl hover:bg-white hover:text-[var(--datawalt-purple)] hover:shadow-md"
                >
                  Ver video
                </button>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 sm:p-6 flex items-center justify-center order-first lg:order-last">
              <img 
                src="/assets/Agent.png" 
                alt="AI Agent Platform - Agentes Inteligentes" 
                className="w-full h-auto object-contain rounded-lg max-w-full"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Ecosistema Section */}
      <section className="pt-20 pb-10 sm:pb-12 lg:pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--datawalt-purple)' }}>
              Nuestro Ecosistema
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una arquitectura completa que conecta todos tus sistemas y los transforma en insights accionables
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Orígenes de datos */}
            <div className="text-center">
              <div className="bg-pink-50 rounded-3xl p-8 border-2 border-pink-200">
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--datawalt-red)' }}>
                  Orígenes de datos
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full border-2 border-pink-300 flex items-center justify-center">
                      <span className="text-sm font-bold" style={{ color: 'var(--datawalt-red)' }}>API</span>
                    </div>
                    <div className="ml-4 bg-gray-900 text-white px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold">Odoo</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-900 text-white px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold">Softland</span>
                    </div>
                    <div className="ml-4 w-16 h-16 bg-white rounded-full border-2 border-pink-300 flex items-center justify-center">
                      <span className="text-sm font-bold" style={{ color: 'var(--datawalt-red)' }}>ERP</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full border-2 border-pink-300 flex items-center justify-center">
                      <span className="text-sm font-bold" style={{ color: 'var(--datawalt-red)' }}>RPA</span>
                    </div>
                    <div className="ml-4 bg-gray-900 text-white px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold">SAP B1</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-full border-2 border-pink-300 flex items-center justify-center">
                      <span className="text-sm font-bold" style={{ color: 'var(--datawalt-red)' }}>CRM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Extractor WARP */}
            <div className="text-center relative">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--datawalt-purple)' }}>
                  Extractor WARP
                </h3>
                
                {/* Icono central con efecto de vórtice */}
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-spin-reverse"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600">WARP</span>
                  </div>
                </div>
                
                {/* Flecha hacia la derecha */}
                <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <div className="w-16 h-8 bg-red-500 clip-arrow flex items-center justify-end pr-2">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Capa de productos */}
            <div className="text-center">
              <div className="bg-pink-50 rounded-3xl p-8 border-2 border-pink-200">
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--datawalt-red)' }}>
                  Capa de productos
                </h3>
                
                <div className="space-y-4">
                  {/* BI */}
                  <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">BI</span>
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-gray-700">Data Viz</div>
                        <div className="text-xs text-gray-500">Automatización</div>
                        <div className="text-xs text-gray-500">Storytelling</div>
                      </div>
                    </div>
                    <div className="text-gray-600">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="18.7" cy="8" r="1.5" fill="currentColor"/>
                        <circle cx="13.6" cy="13.2" r="1.5" fill="currentColor"/>
                        <circle cx="10.8" cy="10.5" r="1.5" fill="currentColor"/>
                        <circle cx="7" cy="14.3" r="1.5" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>

                  {/* Heuristics */}
                  <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-xs">Heu</span>
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-gray-700">Forecasting</div>
                        <div className="text-xs text-gray-500">Optimización</div>
                        <div className="text-xs text-gray-500">Flujo de caja proyectado</div>
                      </div>
                    </div>
                    <div className="text-gray-600">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Agents */}
                  <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-xs">AI</span>
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-gray-700">Modelo base</div>
                        <div className="text-xs text-gray-500">Herramientas</div>
                        <div className="text-xs text-gray-500">Memoria</div>
                      </div>
                    </div>
                    <div className="text-gray-600">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M13 11h4M13 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="12" cy="4" r="1" fill="currentColor"/>
                        <circle cx="6" cy="20" r="1" fill="currentColor"/>
                        <circle cx="18" cy="20" r="1" fill="currentColor"/>
                        <path d="M6 19v-1M18 19v-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explicación del flujo */}
          <div className="mt-16">
            <div className="rounded-2xl p-6 sm:p-8 w-full lg:-mx-6 text-center" style={{ backgroundColor: 'var(--datawalt-purple)' }}>
              <h4 className="text-2xl font-bold mb-4 text-white">
                ¿Cómo funciona?
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-3xl mb-2">1️⃣</div>
                  <h5 className="font-semibold mb-2 text-white">Extracción</h5>
                  <p className="text-gray-300 text-sm">WARP se conecta a todos tus sistemas (ERP, CRM, APIs) y extrae los datos automáticamente.</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">2️⃣</div>
                  <h5 className="font-semibold mb-2 text-white">Transformación</h5>
                  <p className="text-gray-300 text-sm">Los datos se procesan, limpian y estructuran para ser utilizados por nuestros productos.</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">3️⃣</div>
                  <h5 className="font-semibold mb-2 text-white">Productos</h5>
                  <p className="text-gray-300 text-sm">BI, Heuristics y Agents utilizan estos datos para generar insights y automatizar procesos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 pt-8 sm:pt-10 lg:pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--datawalt-purple)' }}>¿Por qué elegir DataWalt?</h2>
            <p className="text-xl text-gray-600">No revendemos software, creamos soluciones a medida</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--datawalt-red)' }}>+7</div>
              <div className="text-gray-600">años convirtiendo problemas complejos en soluciones simples</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--datawalt-red)' }}>+60</div>
              <div className="text-gray-600">empresas ya no sufren con sus datos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--datawalt-red)' }}>100%</div>
              <div className="text-gray-600">continuidad operativa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--datawalt-red)' }}>24/7</div>
              <div className="text-gray-600">innovamos por ti para que no tengas que hacerlo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider between Why Choose and Testimonials */}
      <div className="w-full my-8 sm:my-10 lg:my-12" aria-hidden="true">
        <div className="h-[2px] w-full bg-[var(--datawalt-purple)]"></div>
      </div>

      {/* Testimonios tipo "tweet" */}
      <section className="max-w-7xl mx-auto px-6 pt-2 sm:pt-3 lg:pt-0 pb-16">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold" style={{ color: 'var(--datawalt-purple)' }}>Qué dicen nuestros clientes sobre nosotros</h3>
          
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow transition-shadow md:shadow-md md:hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">OQ</div>
              <div>
                <div className="font-semibold text-gray-800">Óscar Quezada</div>
                <div className="text-gray-500 text-sm">Gerente de TI · Laboratorios Bagó</div>
              </div>
            </div>
            <p className="text-gray-800 leading-relaxed">
              “Gracias a DataWalt tenemos nuestra <span className="font-semibold">torre de control</span> o <span className="font-semibold">fuente de la verdad</span>, con todos los datos centralizados de cada área del negocio. Hoy tomamos <span className="font-semibold">mejores decisiones</span>.”
            </p>
            <div className="mt-4 text-gray-400 text-sm">#BI #DataOps #Decisiones</div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow transition-shadow md:shadow-md md:hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">JO</div>
              <div>
                <div className="font-semibold text-gray-800">Juan Olivier</div>
                <div className="text-gray-500 text-sm">Gerente General · Labococh</div>
              </div>
            </div>
            <p className="text-gray-800 leading-relaxed">
              “Solamente uno se preocupa de alimentar nuestro ERP y la información <span className="font-semibold">fluye</span>. Es una gran herramienta que te permite obtener la <span className="font-semibold">data al 100% día a día</span> y no esperar un informe futuro para reflejar lo que necesitamos <span className="font-semibold">hoy</span>.”
            </p>
            <div className="mt-4 text-gray-400 text-sm">#ERP #Automatización #Resultados</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--datawalt-purple)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para transformar tus datos?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            No prometemos magia, pero los resultados son bastante mágicos.
          </p>
          <button
            className="px-8 py-4 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--datawalt-red)' }}
          >
            Agenda una reunión gratuita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4" style={{ color: 'var(--datawalt-red)' }}>
                DataWalt
              </div>
              <p className="text-gray-400">
                Transformamos el caos de datos en soluciones brillantes
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">BI</a></li>
                <li><a href="#" className="hover:text-white">Heuristics</a></li>
                <li><a href="#" className="hover:text-white">Agents</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Acerca de</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <p>Nueva Tajamar 481, Torre Sur</p>
                <p>Las Condes, Santiago</p>
                <p>+56 9 9078 4008</p>
                <p>contacto@datawalt.cl</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DataWalt. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

