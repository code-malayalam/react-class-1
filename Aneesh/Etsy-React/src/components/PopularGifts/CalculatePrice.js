export default function calculatePrice(price, disc){
    return Math.round(price * (1 - disc / 100))
}