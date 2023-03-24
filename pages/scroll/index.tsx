import { useHorizontalScroll } from '@@/utils/script'

const ScrollPage = () => {
  const scrollRef = useHorizontalScroll()
  return (
    <div className="container">
      <h1>Scroll example</h1>
      <div className="main-content-scroll-horizontal" ref={scrollRef}>
        <div className="item-scroll">item</div>
        <div className="item-scroll">item</div>
        <div className="item-scroll">item</div>
        <div className="item-scroll">item</div>
        <div className="item-scroll">item</div>
        <div className="item-scroll">item</div>
        <div className="item-scroll">item</div>
        <div className="item-scroll">item</div>
      </div>
    </div>
  )
}
export default ScrollPage
