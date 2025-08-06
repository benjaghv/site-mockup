import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold" style={{ color: 'var(--datawalt-red)' }}>
              DataWalt
            </div>
            <div className="hidden md:flex space-x-6 text-gray-600">
              <a href="#bi" className="hover:text-gray-900">BI</a>
              <a href="#heuristics" className="hover:text-gray-900">Heuristics</a>
              <a href="#agents" className="hover:text-gray-900">Agents</a>
              <a href="#about" className="hover:text-gray-900">Acerca de</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <button 
              className="px-6 py-2 text-gray-600 hover:text-gray-900"
            >
              Iniciar sesión
            </button>
            <button 
              className="px-6 py-2 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--datawalt-red)' }}
            >
              Agenda una demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Convierte datos caóticos en 
            <span className="block" style={{ color: 'var(--datawalt-red)' }}>
              decisiones inteligentes
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Plataforma SaaS de BI, Analytics e IA que elimina la jerga técnica. 
            Dashboards que entiende todo tu equipo, predicciones que realmente predicen, 
            y agentes de IA que trabajan como si fueran parte de tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="px-8 py-4 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--datawalt-red)' }}
            >
              Agenda una demo gratuita
            </button>
            <button 
              className="px-8 py-4 border-2 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
              style={{ 
                borderColor: 'var(--datawalt-purple)', 
                color: 'var(--datawalt-purple)' 
              }}
            >
              Ver productos
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-8">Más de 60 empresas ya toman mejores decisiones con DataWalt</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-400 font-semibold">Laboratorios Bagó</div>
            <div className="text-gray-400 font-semibold">Coca-Cola</div>
            <div className="text-gray-400 font-semibold">Enaex</div>
            <div className="text-gray-400 font-semibold">Iansa</div>
            <div className="text-gray-400 font-semibold">O'Neill</div>
            <div className="text-gray-400 font-semibold">TTM</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tres productos que resuelven todos tus problemas de datos</h2>
          <p className="text-xl text-gray-600">Sin jerga técnica, sin complicaciones, solo resultados medibles</p>
        </div>

        {/* BI Feature */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--datawalt-purple)' }}>
                BI: Visualiza el presente
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Dale vida a tus números con dashboards que hasta el equipo de marketing va a entender. 
                Reportes que se actualizan solos porque la vida es muy corta para Excel.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Dashboards interactivos que revelan patrones ocultos
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Reportes automáticos que se actualizan en tiempo real
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Todo tu equipo hablando el mismo idioma: datos
                </li>
              </ul>
              <button 
                className="mt-6 px-6 py-3 text-white rounded-lg font-medium hover:opacity-90"
                style={{ backgroundColor: 'var(--datawalt-red)' }}
              >
                Descubre BI
              </button>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="text-6xl mb-4">📊</div>
                <p>Dashboard interactivo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Heuristics Feature */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--datawalt-purple)' }}>
                Heuristics: Optimiza el futuro
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Algoritmos inteligentes que ven lo que viene antes que tu competencia. 
                Modelos predictivos que realmente predicen (revolucionario, ¿no?).
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Predicciones de flujo de caja y demanda
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Optimización automática de recursos y procesos
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Machine Learning aplicado donde realmente suma valor
                </li>
              </ul>
              <button 
                className="mt-6 px-6 py-3 text-white rounded-lg font-medium hover:opacity-90"
                style={{ backgroundColor: 'var(--datawalt-red)' }}
              >
                Descubre Heuristics
              </button>
            </div>
            <div className="md:order-1 bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="text-6xl mb-4">🔮</div>
                <p>Predicciones inteligentes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Agents Feature */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--datawalt-purple)' }}>
                Agents: Agentes personalizados
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Agentes LLM que trabajan como si fueran parte de tu equipo. 
                Entrenados con el conocimiento de tu organización y que hablan tu idioma.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Asistentes virtuales que conocen tu empresa por dentro
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Automatización inteligente de tareas repetitivas
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Procesamiento de lenguaje natural que entiende tu jerga interna
                </li>
              </ul>
              <button 
                className="mt-6 px-6 py-3 text-white rounded-lg font-medium hover:opacity-90"
                style={{ backgroundColor: 'var(--datawalt-red)' }}
              >
                Descubre Agents
              </button>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="text-6xl mb-4">🤖</div>
                <p>Agentes de IA personalizados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por qué elegir DataWalt?</h2>
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
              <div className="text-gray-600">continuidad operativa porque los lunes ya son duros</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--datawalt-red)' }}>24/7</div>
              <div className="text-gray-600">innovamos por ti para que no tengas que hacerlo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl text-gray-700 italic mb-6">
            "Gracias a DataWalt tenemos nuestra torre de control o fuente de la verdad, 
            con todos los datos centralizados de cada área de nuestro negocio, 
            lo que nos permite tomar mejores decisiones."
          </blockquote>
          <div className="flex items-center justify-center">
            <div>
              <div className="font-semibold">Óscar Quezada</div>
              <div className="text-gray-600">Gerente de TI, Laboratorios Bagó</div>
            </div>
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
