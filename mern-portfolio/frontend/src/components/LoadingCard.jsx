export default function LoadingCard() {
  return (
    <div className="card p-4">
      <div className="h-40 skeleton mb-4"></div>
      <div className="h-5 w-2/3 skeleton mb-2"></div>
      <div className="h-4 w-1/2 skeleton"></div>
    </div>
  )
}
