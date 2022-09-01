import InformationBox from './InformationBox.svelte';
//import app.scss
export default {
    title: 'Information Box',
    component: InformationBox,
};

export const Default = () => ({
    Component: InformationBox,
    props: {
        title: 'Jorn Midnight Steel Mesh Watch',
        price: 1000,
    },
});
export const Reduced = () => ({
    Component: InformationBox,
    props: {
        title: 'Jorn Midnight Steel Mesh Watch',
        price: 1000,
        reduction: 20,
    },
});
