import "tailwindcss/tailwind.css"

export default function TaskDetail() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Task Detail&nbsp;
          <code className="font-mono font-bold">http://localhost:8082/detail</code>
        </p>
      </div>
      <div className="grid grid-rows-2 grid-cols-3 gap-8 mt-4 mx-2">
        <div>
          <img src="http://localhost:8082/mou-1.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <img src="http://localhost:8082/mou-3.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <img src="http://localhost:8082/mou-4.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </main>
  );
}
