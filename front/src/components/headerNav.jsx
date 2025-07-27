
export function HeaderNav() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">E-Surfshop</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Inicio</a></li>
          <li><a href="/productos" className="hover:underline">Productos</a></li>
          <li><a href="/contacto" className="hover:underline">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}