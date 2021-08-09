import { Link } from "react-router-dom"
import PageLayout from "../layouts/PageLayout"
import Container from "../components/ui/Container"
import EditNoteForm from "../components/EditNoteForm"

const EditPage = () => {
    return (
        <PageLayout>
            <div>
                <h4>
                    <Link to="/" >Home</Link> / Edit{' '}
                </h4>
            </div>
            <Container>
                <h1>Edit Note</h1>
                <EditNoteForm />
            </Container>
        </PageLayout>
    )
}

export default EditPage