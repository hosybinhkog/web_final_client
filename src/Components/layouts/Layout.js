import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="fixed top-0 z-20">
        <Header />
      </div>
      <div className="min-h-[80vh] mt-16 flex justify-center items-center">
        <Routers />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
