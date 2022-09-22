<script lang="ts">
    import moment from 'moment';
    export let expected: string;
    export let freePrice: number;

    const checkIfNextDayAvailable = () => {
        //if before 5 pm, next day is available
        const now = moment();
        const fivePM = moment().hour(17).minute(0).second(0);
        return now.isBefore(fivePM);
    };

    const getDeliveryDate = () => {
        const now = moment();
        const nextDay = moment().add(1, 'days');
        const nextDayAvailable = checkIfNextDayAvailable();
        const deliveryDate = nextDayAvailable
            ? nextDay
            : nextDay.add(1, 'days');
        return deliveryDate.format('dddd Do MMMM');
    };
</script>

<div class="delivery-wrapper">
    <span
        >Order by <b>{getDeliveryDate()}</b> and get free <b>{expected}</b>
        delivery with free shipping (min ${freePrice})</span
    >
</div>

<style lang="scss">
    .delivery-wrapper {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: center;
    }
</style>
