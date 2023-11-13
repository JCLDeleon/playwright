import { test } from "@playwright/test";
const { DynamicTablePage } = require('../models/dynamic-table.model')

test('Go to Dynamic Table Page', async ({ page }) => {

        const dynamicTablePage = new DynamicTablePage(page)
        await dynamicTablePage.navigateToDynamicTable()

        // let row = await dynamicTablePage.getChromeRowNo();
        // let col = await dynamicTablePage.getCPUColumnNo();

        // console.log(row);
        // console.log(col);
        console.log(await dynamicTablePage.getTableChromeCPU());
        // await dynamicTablePage.checkChromeCPU()
});

