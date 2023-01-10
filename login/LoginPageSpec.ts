import {when} from "../lib/mocha-bdd";
import {Browser, ensure} from "../lib";
import {LoginPage} from "./LoginPage";
import {then} from "../lib/mocha-simple";

describe('Logic test', () => {
    const browser = new Browser('chrome');
    const page = new LoginPage(browser);

    it('should display error message on invalid phone number', async () => {
        // before
        await page.navigate();

        await when("invalid phone typed", async () => {
            await page.form$.input$.typePhone("55566777")
            await page.form$.submit$.click()
        })

        await then('error message is displayed', async () => {
            await ensure(page.form$.input$).textIs('Darth Vader');
        });
    });

    it('Test Case #2: Unauthenticated cannot submit ideas', async () => {
        // before
        await page.navigate();

        await when("invalid phone typed", async () => {
            await page.form$.input$.typePhone("55566777")
            await page.form$.submit$.click()
        })

        await then('error message is displayed', async () => {
            await ensure(page.form$.input$).textIs('Darth Vader');
        });
    });

    after(async () => {
        await browser.close()
    });
});
