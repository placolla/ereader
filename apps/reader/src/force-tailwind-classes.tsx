// This file exists only to force Tailwind to include utility classes
export default function ForceTailwindInjection() {
  return (
    <div className="hidden">
      <div className="m-4 rounded bg-black p-4 text-white shadow" />
      <div className="flex grid gap-2 border border-red-500" />
      <div className="text-sm text-lg font-bold italic underline line-through" />
      <div className="dark:bg-gray-800 dark:text-white" />
      <div className="ring ring-blue-500 ring-opacity-75 ring-offset-2" />
      <div className="border-outline-variant bg-primary/10 text-primary" />
    </div>
  )
}
