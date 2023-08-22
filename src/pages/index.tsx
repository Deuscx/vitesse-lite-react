export default function Index() {
  const name = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const go = () => {
    if (name.current)
      navigate(`/hi/${encodeURIComponent(name.current.value)}`)
  }

  return (
      <div>
        <div className="i-carbon-campsite inline-block text-4xl" />
        <p>
          <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
          Vitesse Lite
          </a>
        </p>
        <p>
          <em className="text-sm op75">Opinionated Vite Starter Template</em>
        </p>

        <div className="py-4" />

        <input
          ref={name}
          id="input"
          placeholder="What's your name?"
          type="text"
          className="outline-active:none w-250px border border-dark:gray-700 border-gray-200 border-rounded bg-transparent px-4 py-2 text-center outline-none"
          onKeyDown={({ key }) => key === 'Enter' && go()}
        />

        <div>
          <button
            className="m-3 text-sm btn"
            disabled={!name}
            onClick={() => go() }
          >
          Go
          </button>
        </div>
      </div>
  )
}
