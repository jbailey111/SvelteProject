import Button from './Button.svelte';

export default {
    title: 'Button',
    component: Button,
};

export const Default = () => ({
    Component: Button,
    props: {
        label: 'Button',
        styles: {
            color: 'blue',
            width: '100px',
            height: '100px',
        },
    },
});

export const Warning = () => ({
    Component: Button,
    props: {
        label: 'Button',
        styles: {
            color: 'red',
            width: '100px',
            height: '100px',
        },
    },
});
