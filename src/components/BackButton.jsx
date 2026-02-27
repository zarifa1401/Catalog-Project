import { useNavigate } from 'react-router-dom'

function BackButton({ to = -1, children = "← Back" }) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(to)}
      className="btn-secondary group"
    >
      <span className="group-hover:-translate-x-1 transition-transform duration-200 inline-block">
        {children}
      </span>
    </button>
  )
}

export default BackButton