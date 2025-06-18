
import dayjs from 'dayjs'

const prefixList = ['(同人ゲーム)', '(18禁ゲーム)', '(同人アニメ)', '(18禁アニメ)'];
const prefixDropdownElementId = 'filename-generator-prefix-dropdown';
const generatedFilenameTextboxId = 'filename-generator-generated-filename'
let mainFrame, prefixDropdown, generatedFilenameTextbox;

const extractDataFromPage = () => {
    const makerName = document.querySelector('#work_maker > tbody > tr > td > span > a')?.textContent ?? '';
    const workName = document.querySelector('#work_name')?.textContent ?? '';
    const workId = document.URL.match(/RJ[0-9]+(?:\.html)?/)?.[0]?.replace(/\.html/g, '') ?? '';

    const saleDateStr = document.querySelector('#work_outline > tbody > tr:nth-child(1) > td > a')?.textContent ?? '';
    const saleDate = saleDateStr !== '' ? 
      dayjs(saleDateStr.replace(/(年|月|日)/g, '-').substr(0, 'YYYY-MM-DD'.length), 'YYYY-MM-DD') : // Remove suffix '-' 
      dayjs();

    return {
        makerName,
        saleDate,
        workName,
        workId,
    }
}

const createPrefixDropdown = () => {
    const dropdown = document.createElement('select');
    prefixList.forEach(prefix => {
        const prefixOption = document.createElement('option');
        prefixOption.innerText = prefix;
        dropdown.appendChild(prefixOption);
    });
    dropdown.id = prefixDropdownElementId;
    dropdown.value = prefixList?.[0] ?? '';
    dropdown.onchange = updateGeneratedFilenameTextbox;
    return dropdown;
}

const createGeneratedFilenameTextbox = () => {
    const textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.id = generatedFilenameTextboxId;
    textbox.style.width = '700px';
    textbox.style.height = 'auto';
    return textbox;
}

const formatFilename = (data, prefix) => {
    const formatedSaleDate = data.saleDate.format('YYMMDD');
    return `${prefix} [${formatedSaleDate}][${data.workId}][${data.makerName}] ${data.workName}`
}

const updateGeneratedFilenameTextbox = () => {
    generatedFilenameTextbox.value = formatFilename(extractDataFromPage(), prefixDropdown.value);
}

const init = () => {
    mainFrame = document.createElement('div');
    prefixDropdown = createPrefixDropdown();
    generatedFilenameTextbox = createGeneratedFilenameTextbox();
    
    mainFrame.appendChild(prefixDropdown);
    mainFrame.appendChild(generatedFilenameTextbox);
    updateGeneratedFilenameTextbox();
    
    document.querySelector('#top_wrapper').appendChild(mainFrame);
}

if(document.URL.match(/maniax\/work\/=\/product_id\/RJ[0-9]+(?:\.html)?/))
  init();
