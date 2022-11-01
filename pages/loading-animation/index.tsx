const LoadingAnimation = () => {
  return (
    <div className="container">
      <h1>Loading list</h1>
      <div className="p-2" style={{ width: 300 }}>
        <h1 className="skeleton-box w-100 m-0"></h1>
        <p className="skeleton-box w-100 m-0"></p>
        <div className="skeleton-box w-50"></div>
      </div>
      <div className="p-2" style={{ width: 300 }}>
        <h1 className="skeleton-box w-100 m-0"></h1>
        <p className="skeleton-box w-100 m-0"></p>
        <div className="skeleton-box w-50"></div>
      </div>
      <div className="p-2" style={{ width: 300 }}>
        <h1 className="skeleton-box w-100 m-0"></h1>
        <p className="skeleton-box w-100 m-0"></p>
        <div className="skeleton-box w-50"></div>
      </div>
    </div>
  )
}
export default LoadingAnimation
