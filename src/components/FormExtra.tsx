export default function FormExtra() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="Lembrar-se de mim"
          name="Lembrar-se de mim"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="Lembrar-se de mim" className="ml-2 block text-sm text-gray-900">
        Lembrar-se de mim
        </label>
    </div>

    <div className="text-sm">
      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
        Esqueceu a senha?
      </a>
    </div>
  </div>
  )
}