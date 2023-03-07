import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/routers'

const Layout = () => {
  return (
    <div className="w-full max-w-[1920px] bg-white">
      <Header />
      <main className="min-h-screen mx-auto w-full">
        <Routers />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
