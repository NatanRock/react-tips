// Components
import {
    Hero, Nav, TipList,
} from '../components';

export const TopicByTagPage = () => {
    return (
        <>

            <section className = 'layout'>
                <Hero tipViewMode = 'topic-by-tag' />
                <Nav tipViewMode = 'topic-by-tag' />
                <TipList />
            </section>
        </>
    );
};
