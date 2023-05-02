// Components
import {
    Hero, Nav, Settings, TipList,
} from '../components';

export const AllTopicsPage = () => {
    return (
        <>
            <Settings />
            <section className = 'layout'>
                <Hero tipViewMode = 'all-topics' />
                <Nav tipViewMode = 'all-topics' />
                <TipList />
            </section>
        </>
    );
};
