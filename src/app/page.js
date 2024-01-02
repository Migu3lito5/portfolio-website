import Sidebar from '@/components/SideBar'
import styles from '../styles/page.module.css'
import Header from '@/components/Header'
import SimpleContent from '@/components/SimpleContent'
import TripleContent from '@/components/TripleContent'

export default function Home() {
  return (
    <div>
      <Header
        title={"Miguel A. Francisco"}
        desc="Software Engineer | Comp. Sci. Graduate"
      />
      <Sidebar/>
      <SimpleContent/>
      <TripleContent/>
      </div>
  )
}
