import Sidebar from '@/components/SideBar'
import styles from '../styles/page.module.css'
import Header from '@/components/Header'
import SimpleContent from '@/components/SimpleContent'
import TripleContent from '@/components/TripleContent'
import CustomCursor from '@/components/CustomCursor'
import ContactForm from '@/components/ContactForm'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div>
        <CustomCursor/>
        <Header
          title={"Miguel A. Francisco"}
          desc="Software Engineer | Comp. Sci. Graduate"
        />
        <Sidebar/>
        <div className={styles.pageContent}>
          <SimpleContent/>
          <TripleContent/>
          <ContactSection/>
        </div>
      </div>
  )
}
