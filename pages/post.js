import Layout from '../components/Layout'
import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { title } = router.query
    return (
    <Layout title={title}>
        <p>Reprehenderit reprehenderit minim consequat esse voluptate aliqua esse irure anim. Pariatur esse sint est ex elit nostrud laborum culpa anim consectetur anim occaecat. Consectetur id aliqua sunt do reprehenderit anim.
           Anim qui ut reprehenderit aliquip aliqua.</p>
    </Layout>
    )
}

export default Post