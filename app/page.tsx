'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, X, ChevronRight, Zap, Shield, Database, 
  Clock, CheckCircle, Phone, Mail, MapPin, Send,
  Code, BookOpen, Users, MessageCircle
} from 'lucide-react';
import StructuredData from './components/StructuredData';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Prefetch critical resources */}
      <link rel="dns-prefetch" href="//tecnologicachile.cl" />
      <link rel="dns-prefetch" href="//wa.me" />
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50" role="banner">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-blue-600 flex items-center justify-center rounded-lg">
                  <Database className="h-5 w-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-semibold text-gray-900">API SII Chile</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#inicio" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                  Inicio
                </a>
                <a href="#caracteristicas" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                  Características
                </a>
                <a href="#api" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                  API
                </a>
                <a href="#contacto" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                  Contacto
                </a>
                <a href="tel:800914659" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium transition-colors rounded-lg">
                  800 914 659
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-200">
                <a href="#inicio" className="text-gray-900 block px-3 py-2 text-base font-medium">Inicio</a>
                <a href="#caracteristicas" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">Características</a>
                <a href="#api" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">API</a>
                <a href="#contacto" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">Contacto</a>
                <a href="tel:800914659" className="text-gray-900 block px-3 py-2 text-base font-medium">800 914 659</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Breadcrumbs */}
      <nav className="bg-slate-50 border-b border-slate-200" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-3 text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">Inicio</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <a href="#api" className="text-gray-500 hover:text-blue-600 transition-colors">API SII</a>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-blue-600 font-medium">API SII Chile</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main role="main">
        {/* Hero Section */}
        <section id="inicio" className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24 lg:py-32" itemScope itemType="https://schema.org/SoftwareApplication">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
                API DE CONSULTA SII CHILE
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight" itemProp="name">
              API SII Chile: La Más Rápida
              <span className="block text-gray-600 mt-2 font-normal">para Registros de Compra y Venta</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed" itemProp="description">
              <strong>La mejor API SII Chile</strong> para acceder a registros de compra y venta del 
              Servicio de Impuestos Internos. <strong>API SII más rápida del mercado</strong>, diseñada para empresas 
              que procesan grandes volúmenes de documentos fiscales con máxima eficiencia y confiabilidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-base shadow-sm"
              >
                Solicitar Acceso
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#api" 
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium rounded-lg transition-colors text-base"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Documentación
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white/70 border border-slate-200 p-8 rounded-xl backdrop-blur-sm shadow-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-4 mx-auto rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Respuesta Rápida</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-4 mx-auto rounded-lg">
                  <Database className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Alto Volumen</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-violet-100 flex items-center justify-center mb-4 mx-auto rounded-lg">
                  <Shield className="h-6 w-6 text-violet-600" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Alta Disponibilidad</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 flex items-center justify-center mb-4 mx-auto rounded-lg">
                  <Code className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Integración Sencilla</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
                CARACTERÍSTICAS PRINCIPALES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Tecnología empresarial avanzada
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Arquitectura diseñada para empresas que requieren procesamiento confiable 
              de grandes volúmenes de documentos fiscales del SII de Chile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="">
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-6 rounded-lg">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rendimiento Optimizado
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Arquitectura diseñada para procesar consultas masivas del SII 
                con tiempos de respuesta consistentes y confiables.
              </p>
            </div>

            <div className="">
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-lg">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Datos Oficiales
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Acceso directo a la información oficial del Servicio de Impuestos 
                Internos con actualizaciones en tiempo real.
              </p>
            </div>

            <div className="">
              <div className="w-12 h-12 bg-violet-100 flex items-center justify-center mb-6 rounded-lg">
                <Shield className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Seguridad Empresarial
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Protocolo de seguridad bancaria con encriptación SSL/TLS 
                y autenticación por tokens JWT.
              </p>
            </div>

            <div className="">
              <div className="w-12 h-12 bg-amber-100 flex items-center justify-center mb-6 rounded-lg">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Escalabilidad Sin Límites
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Infraestructura que se adapta a cualquier volumen de procesamiento 
                sin degradación del servicio.
              </p>
            </div>

            <div className="">
              <div className="w-12 h-12 bg-amber-100 flex items-center justify-center mb-6 rounded-lg">
                <Code className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Integración Rápida
              </h3>
              <p className="text-gray-600 leading-relaxed">
                API REST con documentación completa y ejemplos de implementación 
                para los principales lenguajes de programación.
              </p>
            </div>

            <div className="">
              <div className="w-12 h-12 bg-rose-100 flex items-center justify-center mb-6 rounded-lg">
                <Users className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Soporte Profesional
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Equipo técnico especializado disponible para implementación, 
                configuración y soporte continuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why API SII Chile Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
                ¿POR QUÉ ELEGIR NUESTRA API SII?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              ¿Por qué API SII Chile es la <span className="text-blue-600">Mejor Opción</span>?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Comparamos <strong>API SII Chile</strong> con las principales alternativas del mercado. 
              Descubre por qué somos la <strong>API SII más rápida y confiable</strong> para tu empresa.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Performance Comparison */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Velocidad Comprobada
              </h3>
              <div className="space-y-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="font-bold text-2xl text-green-600">&lt; 200ms</div>
                  <div className="text-sm text-green-700">API SII Chile</div>
                </div>
                <div className="text-sm text-gray-600">vs 800ms+ competencia</div>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                <strong>4x más rápida</strong> que otras APIs SII del mercado
              </p>
            </div>

            {/* Availability */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Alta Disponibilidad
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="font-bold text-2xl text-blue-600">99.9%</div>
                  <div className="text-sm text-blue-700">Uptime garantizado</div>
                </div>
                <div className="text-sm text-gray-600">vs 95-98% competencia</div>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                <strong>Infraestructura empresarial</strong> con redundancia total
              </p>
            </div>

            {/* No Limits */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sin Límites de Volumen
              </h3>
              <div className="space-y-3">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="font-bold text-2xl text-purple-600">∞</div>
                  <div className="text-sm text-purple-700">Consultas ilimitadas</div>
                </div>
                <div className="text-sm text-gray-600">vs límites restrictivos</div>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                <strong>Única API SII</strong> sin restricciones de uso
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
              <h3 className="text-2xl font-bold text-white text-center">
                Comparación: API SII Chile vs Competencia
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center font-semibold text-blue-600">API SII Chile</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">SimpleAPI.cl</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">APIGateway.cl</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">Otros APIs SII</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Velocidad de respuesta</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                        &lt; 200ms
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">800ms+</td>
                    <td className="px-6 py-4 text-center text-gray-600">1200ms+</td>
                    <td className="px-6 py-4 text-center text-gray-600">500-2000ms</td>
                  </tr>
                  <tr className="bg-slate-25">
                    <td className="px-6 py-4 font-medium text-gray-900">Límite de consultas</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                        Sin límites
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">500/mes gratis</td>
                    <td className="px-6 py-4 text-center text-gray-600">1,000/mes</td>
                    <td className="px-6 py-4 text-center text-gray-600">100-5,000/mes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Disponibilidad (SLA)</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                        99.9%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">95%</td>
                    <td className="px-6 py-4 text-center text-gray-600">98%</td>
                    <td className="px-6 py-4 text-center text-gray-600">90-95%</td>
                  </tr>
                  <tr className="bg-slate-25">
                    <td className="px-6 py-4 font-medium text-gray-900">Soporte técnico</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                        24/7 especializado
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Email</td>
                    <td className="px-6 py-4 text-center text-gray-600">Horario oficina</td>
                    <td className="px-6 py-4 text-center text-gray-600">Limitado</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Código fuente</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                        Disponible
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">No</td>
                    <td className="px-6 py-4 text-center text-gray-600">No</td>
                    <td className="px-6 py-4 text-center text-gray-600">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Convencido de que somos la mejor API SII Chile?
            </h4>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a las <strong>200+ empresas</strong> que ya usan <strong>API SII Chile</strong> 
              para optimizar sus procesos tributarios con la API SII más confiable del mercado.
            </p>
            <a 
              href="#contacto" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg text-lg"
            >
              <Phone className="mr-3 h-6 w-6" />
              Solicitar API SII Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full">
                CASOS DE USO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              ¿Cómo puedes usar nuestra API?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Desde empresas pequeñas hasta grandes corporaciones, nuestra API se adapta 
              a diferentes necesidades de consulta de registros del SII de Chile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ERP Integration */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Integración con ERP
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Conecta tu sistema ERP directamente con los registros del SII para 
                automatizar la conciliación de facturas y mantener tu contabilidad actualizada.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  SAP, Oracle, Microsoft Dynamics
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Conciliación automática
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Sincronización en tiempo real
                </div>
              </div>
            </div>

            {/* E-commerce Platforms */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Plataformas E-commerce
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Valida automáticamente las facturas de tus proveedores y verifica 
                el cumplimiento fiscal en tu tienda online o marketplace.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  WooCommerce, Shopify, Magento
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  Validación de proveedores
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  Control de compliance
                </div>
              </div>
            </div>

            {/* Financial Software */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Software Contable
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Mejora tu software de contabilidad con acceso directo a registros oficiales 
                del SII para auditoria y verificación automática.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mr-2"></div>
                  Softland, Defontana, ACF
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mr-2"></div>
                  Auditoría automatizada
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mr-2"></div>
                  Reportes oficiales
                </div>
              </div>
            </div>

            {/* Banking & Fintech */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Banca y Fintech
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Verifica la actividad comercial de tus clientes empresariales 
                para evaluar riesgo crediticio y cumplimiento normativo.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                  Evaluación crediticia
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                  KYB automatizado
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                  Monitoreo continuo
                </div>
              </div>
            </div>

            {/* Business Intelligence */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Intelligence
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Enriquece tus dashboards y reportes con datos tributarios oficiales 
                para análisis de mercado y competencia.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
                  Power BI, Tableau, Qlik
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
                  Análisis de mercado
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
                  Inteligencia competitiva
                </div>
              </div>
            </div>

            {/* Custom Applications */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Aplicaciones Personalizadas
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Desarrolla aplicaciones específicas para tu industria con acceso 
                directo a los datos tributarios más actualizados de Chile.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  APIs RESTful
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  SDKs disponibles
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Documentación completa
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Tu caso de uso es diferente?
              </h4>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Nuestro equipo técnico puede ayudarte a diseñar una integración personalizada 
                que se adapte perfectamente a las necesidades específicas de tu empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contacto" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Consultar Integración
                </a>
                <a 
                  href="#api" 
                  className="inline-flex items-center px-6 py-3 border border-blue-300 text-blue-700 hover:bg-blue-50 font-medium rounded-lg transition-colors"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Ver Ejemplos Técnicos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-violet-700 bg-violet-50 border border-violet-200 rounded-full">
                VENTAJA COMPETITIVA
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Diferencia tecnológica
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tecnología especializada para empresas que requieren procesamiento 
              confiable de grandes volúmenes de documentos fiscales.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl">
              <div className="bg-gray-900 text-white p-8 text-center">
                <h3 className="text-2xl font-semibold">
                  Comparación de soluciones
                </h3>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  {/* Otras Soluciones */}
                  <div>
                    <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mx-auto mb-6 rounded-lg">
                      <Clock className="h-6 w-6 text-gray-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Soluciones estándar</h4>
                    <ul className="space-y-3 text-sm text-gray-600 text-left">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></span>
                        Limitaciones de volumen
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></span>
                        Timeouts frecuentes
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></span>
                        Restricciones de uso
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></span>
                        Soporte básico
                      </li>
                    </ul>
                  </div>

                  {/* VS */}
                  <div className="flex items-center justify-center">
                    <div className="text-2xl font-medium text-gray-400">vs</div>
                  </div>

                  {/* Nuestra API */}
                  <div>
                    <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mx-auto mb-6 rounded-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">API SII Chile</h4>
                    <ul className="space-y-3 text-sm text-gray-600 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-600 mr-3" />
                        Optimizada para alto volumen
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-600 mr-3" />
                        Alta disponibilidad
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-600 mr-3" />
                        Sin restricciones
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-600 mr-3" />
                        Soporte empresarial
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Evalúe nuestra solución empresarial
                  </h4>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Solicite información detallada sobre cómo nuestra API puede 
                    optimizar los procesos fiscales de su empresa.
                  </p>
                  <a 
                    href="#contacto" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Solicitar Información
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section id="api" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
                DOCUMENTACIÓN API
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Integración API
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Documentación técnica completa para integrar los registros 
              del SII de Chile en sus sistemas empresariales.
            </p>
          </div>

          {/* Endpoints Section */}
          <div className="mb-20">
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Endpoints disponibles
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Health Check Endpoint */}
              <div className="bg-white border border-gray-200 rounded-xl">
                <div className="bg-gray-100 p-6">
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-white text-gray-700 text-xs font-mono font-medium border border-gray-200 mr-4 rounded">GET</span>
                    <code className="text-gray-900 font-mono text-sm">/</code>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Health Check</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">Verificación del estado operativo del servicio.</p>
                  <div className="bg-gray-50 p-3 border border-gray-200 rounded-md">
                    <div className="text-xs font-medium text-gray-700 mb-1">Respuesta:</div>
                    <code className="text-xs text-gray-600">Status 200 - Servicio operativo</code>
                  </div>
                </div>
              </div>

              {/* Consulta Endpoint */}
              <div className="bg-white border border-gray-200 rounded-xl">
                <div className="bg-gray-100 p-6">
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-white text-gray-700 text-xs font-mono font-medium border border-gray-200 mr-4 rounded">POST</span>
                    <code className="text-gray-900 font-mono text-sm">/api/consulta</code>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Consulta de Documentos</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">Procesamiento de documentos fiscales por período.</p>
                  <div className="space-y-2">
                    <div className="bg-gray-50 p-3 border border-gray-200 rounded-md">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-700">Período:</span>
                        <code className="bg-white px-2 py-1 text-xs font-mono border border-gray-200">YYYY-MM</code>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 border border-gray-200 rounded-md">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-700">Tipo:</span>
                        <div className="space-x-1">
                          <code className="bg-white px-2 py-1 text-xs font-mono border border-gray-200">&quot;compra&quot;</code>
                          <code className="bg-white px-2 py-1 text-xs font-mono border border-gray-200">&quot;venta&quot;</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Authentication & Status Codes */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            {/* Authentication */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center mr-4 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Autenticación</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 border border-gray-200">
                  <div className="font-medium text-gray-900 mb-2 text-sm">Header requerido:</div>
                  <code className="text-xs bg-white px-3 py-2 text-gray-700 block font-mono border border-gray-200">x-api-key: tu-api-key-secreta</code>
                </div>
                <div className="bg-gray-50 p-4 border border-gray-200">
                  <div className="font-medium text-gray-900 mb-2 text-sm">Body JSON:</div>
                  <div className="text-xs text-gray-600">RUT y contraseña del contribuyente SII</div>
                </div>
              </div>
            </div>

            {/* Status Codes */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center mr-4 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Códigos de estado</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></div>
                  <span className="text-sm text-gray-600">200 - Operación exitosa</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></div>
                  <span className="text-sm text-gray-600">400 - Solicitud inválida</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></div>
                  <span className="text-sm text-gray-600">401 - No autorizado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></div>
                  <span className="text-sm text-gray-600">404 - Recurso no encontrado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></div>
                  <span className="text-sm text-gray-600">500 - Error interno</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></div>
                  <span className="text-sm text-gray-600">502 - Error servicio SII</span>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Ejemplo de implementación
              </h3>
            </div>

            {/* Code Block */}
            <div className="bg-gray-900 border border-gray-700">
              {/* Terminal Header */}
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">api-example.js</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-sm">JavaScript</span>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 lg:p-8">
                <pre className="text-sm lg:text-base text-gray-100 leading-relaxed overflow-x-auto">
{`// Consultar registros de compra del SII
const consultarCompras = async () => {
  try {
    const response = await fetch('https://tu-dominio.com/api/consulta/2024-01/compra', {
      method: 'POST',
      headers: {
        'x-api-key': 'tu-api-key-secreta',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rut: '12345678-9',
        contrasena: 'tu-contraseña-sii'
      })
    });

    const data = await response.json();

    if (data.success) {
      console.log(\`Se encontraron \${data.total_registros} registros\`);
      console.log('Datos:', data.datos);
    } else {
      console.error('Error API:', data.error.message);
    }
  } catch (error) {
    console.error('Error de conexión:', error.message);
  }
};

// Respuesta exitosa
{
  "success": true,
  "periodo": { "anho": 2024, "mes": 1 },
  "tipo": "compra",
  "total_registros": 150,
  "datos": [
    {
      "tipo_doc": "33",
      "rut_proveedor": "76123456-7",
      "razon_social": "EMPRESA EJEMPLO S.A.",
      "folio": "12345",
      "fecha_docto": "2024-01-15",
      "monto_neto": 100000,
      "monto_iva_recuperable": 19000,
      "monto_total": 119000
    }
  ]
}`}
                </pre>
              </div>
            </div>

            {/* Error Example */}
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg">
              <div className="bg-red-100 px-6 py-3 border-b border-red-200 rounded-t-lg">
                <h4 className="text-sm font-medium text-gray-900">Ejemplo de respuesta de error</h4>
              </div>
              <div className="p-6">
                <pre className="text-sm text-red-700 bg-red-50/50 p-4 border border-red-200 rounded-md overflow-x-auto font-mono">
{`{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Credenciales del SII inválidas",
    "timestamp": "2024-01-20T15:30:45.123Z"
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-full">
                PLANES Y PRECIOS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Soluciones empresariales
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Modelos de licenciamiento flexibles diseñados para diferentes 
              necesidades empresariales y volúmenes de procesamiento.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Subscription Model */}
            <div className="bg-white border border-gray-200 rounded-xl">
              <div className="bg-gray-100 p-8 border-b border-gray-200 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Suscripción</h3>
                  <div className="w-10 h-10 bg-amber-100 flex items-center justify-center rounded-lg">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
                <p className="text-gray-600 mt-2 text-sm">Servicio administrado completamente</p>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">API administrada</div>
                      <div className="text-sm text-gray-600">Sin infraestructura propia</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Soporte técnico</div>
                      <div className="text-sm text-gray-600">Mantenimiento incluido</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Escalamiento automático</div>
                      <div className="text-sm text-gray-600">Adaptable al volumen</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Implementación inmediata</div>
                      <div className="text-sm text-gray-600">Acceso en horas</div>
                    </div>
                  </li>
                </ul>

                <div className="text-center">
                  <div className="bg-gray-50 border border-gray-200 p-6 mb-6 rounded-lg">
                    <div className="text-2xl font-semibold text-gray-900 mb-2">Consultar</div>
                    <div className="text-sm text-gray-600">Precio según volumen</div>
                  </div>
                  <a 
                    href="#contacto" 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-block"
                  >
                    Solicitar Cotización
                  </a>
                </div>
              </div>
            </div>

            {/* Source Code License */}
            <div className="bg-white border-2 border-gray-300 relative rounded-xl">
              <div className="absolute top-4 right-4">
                <span className="bg-gray-900 text-white px-2 py-1 text-xs font-medium">
                  RECOMENDADO
                </span>
              </div>
              
              <div className="bg-gray-900 text-white p-8 border-b border-gray-700 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Código fuente</h3>
                  <div className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-lg">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="text-gray-300 mt-2 text-sm">Licencia completa del sistema</p>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Código completo</div>
                      <div className="text-sm text-gray-600">Personalización total</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Infraestructura propia</div>
                      <div className="text-sm text-gray-600">Control total</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Pago único</div>
                      <div className="text-sm text-gray-600">Sin costos recurrentes</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Documentación técnica</div>
                      <div className="text-sm text-gray-600">Implementación completa</div>
                    </div>
                  </li>
                </ul>

                <div className="text-center">
                  <div className="bg-gray-50 border border-gray-200 p-6 mb-6 rounded-lg">
                    <div className="text-2xl font-semibold text-gray-900 mb-2">Consultar</div>
                    <div className="text-sm text-gray-600">Según requerimientos</div>
                  </div>
                  <a 
                    href="#contacto" 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-block"
                  >
                    Solicitar Información
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-3xl mx-auto">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Asesoría personalizada
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nuestro equipo técnico evaluará sus requerimientos específicos 
                para recomendar la solución más adecuada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contacto" 
                  className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contactar ventas
                </a>
                <a 
                  href="tel:800914659" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  800 914 659
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-rose-700 bg-rose-50 border border-rose-200 rounded-full">
                CONTACTO
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Solicitar acceso
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Complete el formulario y nuestro equipo técnico se comunicará 
              en menos de 24 horas para evaluar sus requerimientos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                      placeholder="tu@empresa.cl"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                      placeholder="+56 9 XXXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="Cuéntanos sobre tu proyecto y cómo planeas usar la API SII..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send className="mr-3 h-5 w-5" />
                  Enviar solicitud
                </button>
                <p className="text-sm text-gray-500 text-center mt-3">
                  Respuesta en 24 horas hábiles
                </p>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-gray-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Teléfono</h4>
                      <p className="text-gray-600">800 914 659</p>
                      <p className="text-sm text-gray-500">Lunes a Viernes, 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-gray-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">contacto@tecnologicachile.cl</p>
                      <p className="text-sm text-gray-500">Respuesta en menos de 2 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-gray-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ubicación</h4>
                      <p className="text-gray-600">Santiago, Chile</p>
                      <p className="text-sm text-gray-500">Servicio remoto a todo el país</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4 text-sm">Características principales</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></div>
                    Datos oficiales del SII
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></div>
                    Implementación rápida
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></div>
                    Soporte especializado
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 mr-3 rounded-full"></div>
                    Precios corporativos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-white flex items-center justify-center rounded-lg">
                  <Database className="h-5 w-5 text-gray-900" />
                </div>
                <span className="ml-3 text-lg font-semibold">API SII Chile</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
                Solución empresarial para el procesamiento de registros fiscales 
                del Servicio de Impuestos Internos de Chile.
              </p>
              <p className="text-xs text-gray-500">
                Desarrollado por <a href="https://tecnologicachile.cl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Tecnológica Chile</a>
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-300">SERVICIOS</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#api" className="hover:text-gray-300 transition-colors">Documentación API</a></li>
                <li><a href="#caracteristicas" className="hover:text-gray-300 transition-colors">Características</a></li>
                <li><a href="#contacto" className="hover:text-gray-300 transition-colors">Precios</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-300">CONTACTO</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#contacto" className="hover:text-gray-300 transition-colors">Solicitar información</a></li>
                <li><a href="tel:800914659" className="hover:text-gray-300 transition-colors">800 914 659</a></li>
                <li><a href="mailto:contacto@tecnologicachile.cl" className="hover:text-gray-300 transition-colors">contacto@tecnologicachile.cl</a></li>
                <li><a href="https://wa.me/56800914659" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p className="text-xs">&copy; 2024 <a href="https://tecnologicachile.cl" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Tecnológica Chile</a>. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      
      </main>

      {/* WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/56800914659?text=Hola%2C%20necesito%20información%20sobre%20la%20API%20SII"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>
    </div>
  );
}
