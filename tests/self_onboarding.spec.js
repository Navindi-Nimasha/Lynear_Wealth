//@ts-check
import { test, expect } from '@playwright/test';

test.describe('Self Onboarding flow', () => {
    // test('Exit from onboarding by clicking Close button', async ({ page }) => {
    //     await page.goto('http://epictechdev.com:50164/');
    //     await expect(page).toHaveURL('http://epictechdev.com:50164/#/pre-login/account-open/verify/user-verify');

    //     //click the Close button
    //     await page.locator('button:has-text("Close")').click();
    //     await expect(page).toHaveURL('https://www.lynear.com/');
    // });

    test('Open an Account page with NIC', async ({ page }) => {
        // Click the label containing the NIC radio button
        await page.locator('label.radio-container:has-text("NIC")').click();
        // Assert that the NIC radio button is checked
        await expect(page.locator('input[type="radio"][name="accountType"]')).toBeChecked();
    });
});
