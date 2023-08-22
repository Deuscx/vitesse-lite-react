export default function Hi() {
  const navigate = useNavigate()
  const params = useParams()

  return (
      <div>
        <div className="i-carbon-pedestrian inline-block text-4xl" />
        <p>
        Hi, { params.name }
        </p>
        <p className="text-sm op50">
          <em>Dynamic route!</em>
        </p>

        <div>
          <button
            className="m-3 mt-8 text-sm btn"
            onClick={() => navigate(-1)}
          >
          Back
          </button>
        </div>
      </div>
  )
}
