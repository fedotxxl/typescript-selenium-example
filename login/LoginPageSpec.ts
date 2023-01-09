import {action, specification, then, when} from "../lib/mocha-bdd";
import {Browser, ensure} from "../lib";
import {LoginPage} from "./LoginPage";

specification('User can login', () => {
    let page: LoginPage;

    action(async () => {
        page = new LoginPage(new Browser('chrome'));

        await page.navigate();
    });

    when('invalid phone typed', async () => {
        action(async () => {
            await page.form$.input$.typePhone("55566777")
            await page.form$.submit$.click()
        });

        then('error message is displayed', async () => {
            // await ensure(pages.home.IdeaDescription).isNotVisible();
        });
    });
})