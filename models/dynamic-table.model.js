import { expect } from "@playwright/test";

exports.DynamicTablePage = class DynamicTablePage {
  constructor(page) {
    this.page = page;
    this.dynamicPageUrl = page.goto("/dynamictable");
    this.columnHeaders = page.getByRole("columnheader");
    this.row = page.getByRole("row");
    this.cpu = page.locator(".bg-warning");
  }

  async navigateToDynamicTable() {
    await this.dynamicPageUrl;
  }

//   async getChromeRowNo() {
//     let tableRows = await this.row.evaluateAll((elements) => elements.map((el) => el.childNodes[0].textContent));
//     console.log(tableRows);
//     return tableRows.indexOf("Chrome");
//   }

//   async getCPUColumnNo() {
//     let columnHeaderRow = await this.columnHeaders.evaluateAll((elements) => elements.map((el) => el.textContent));
//     console.log(columnHeaderRow);
//     return columnHeaderRow.indexOf("CPU")
//   }

  async getTableChromeCPU(){
    let columnHeaderRow = await this.columnHeaders.evaluateAll((elements) => elements.map((el) => el.textContent));
    console.log(columnHeaderRow);
    let CPUCol = columnHeaderRow.indexOf("CPU")

    let tableRows = await this.row.evaluateAll((elements) => elements.map((el) => el.childNodes[0].textContent));
    console.log(tableRows);
    let ChromeRow = tableRows.indexOf("Chrome");

    let tableCells = await this.row.evaluateAll((elements) => elements.map((el) => el.childNodes[CPUCol].textContent));
    let chromeCPU = tableCells[ChromeRow]
    return chromeCPU;
  }

  async getChromeCPU() {
    return await this.cpu.innerText();
  }

  async checkChromeCPU(){
    await expect(this.getChromeCPU).toContain(this.getTableChromeCPU)
  }
};
