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
            height: '30px',
        },
    },
});

export const Warning = () => ({
    Component: Button,
    props: {
        label: 'Warning ',
        styles: {
            color: 'red',
            width: '100px',
            height: '30px',
        },
    },
});

export const MaxWidth = () => ({
    Component: Button,
    props: {
        label: 'Large',
        styles: {
            color: 'blue',
            width: '300px',
            height: '30px',
        },
    },
});

export const rounded = () => ({
    Component: Button,
    props: {
        label: 'Rounded',
        styles: {
            color: 'lightgreen',
            width: '100px',
            height: '30px',
            radius: true,
        },
    },
});
