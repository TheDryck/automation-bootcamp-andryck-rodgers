

const SignupPage = require('../pageobjects/signup.page');
const Checkout = require('../pageobjects/checkout.page');


describe('Luma ECommerce workflow', () => {
    it('should sign up with valid inputs', async () => {
        await SignupPage.open();

        await SignupPage.signup('dryck', 'rodg', 'rodgdry@gmail.com', 'pass#123');
        //await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/customer/account/')
        //await expect('.logged-in').toHaveTextContaining('Welcome, dryck rodg!');
    })

    it('Should add an item to the cart', async () => {
        await browser.url('https://magento.softwaretestingboard.com/#');

        let product = await $('a[title="Fusion Backpack"]');
        await product.click()

        //let button = await $('.primary button[title="Add to Cart"]')
        let button = await $('#product-addtocart-button')
        await button.click()
    })

    it('Purchase the item in cart', async () => {
        await browser.url('https://magento.softwaretestingboard.com/#');
        let product = await $('a[title="Fusion Backpack"]');
        await product.click()
        let button = await $('#product-addtocart-button')
        await button.click()

        let cart = await $('a[class="action showcart"]');
        await cart.waitForExist({timeout:5000})
        await cart.click();
        let checkout = await $('#top-cart-btn-checkout')
        await checkout.click()

        await Checkout.inputDetails('dryck', 'rodg', 'Knotsford Blvd', 'Florida', 'JMCN01','8764567688');
        await Checkout.selectState().selectByVisibleText("Florida");
        await Checkout.selectCountry().selectByVisibleText("United States");
        await Checkout.inputCheckbox().click()
        await Checkout.btnNext().click();

        let order = await $('.primary button[title="Place Order"]');
        await order.click()

    })

    it('Verify purchase in order history', async ()=>{
        await browser.url('https://magento.softwaretestingboard.com/sales/order/history/');
        
    })
});