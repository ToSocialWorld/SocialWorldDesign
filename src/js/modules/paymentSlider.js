export default function addPaymentSlider() {
    let paymentSlider = document.getElementById('payment-slider');

    noUiSlider.create(paymentSlider, {
        start: [0, 20],
        step: 1,
        range: {
            'min': [0],
            'max': [20]
        }
    });

    let minPayment = document.getElementById("payment-min");
    let maxPayment = document.getElementById("payment-max");

    paymentSlider.noUiSlider.on('update', function (values, handle) {

        let value = values[handle];

        if (handle) {
            maxPayment.value = value;
        } else {
            minPayment.value = value;
        }
    });

    minPayment.addEventListener('change', function () {
        paymentSlider.noUiSlider.set([this.value, null]);
    });

    maxPayment.addEventListener('change', function () {
        paymentSlider.noUiSlider.set([null, this.value]);
    });
};