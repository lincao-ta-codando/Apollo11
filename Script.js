const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
//TESTE: 65212440
(async function() {
    const browser = await puppeteer.launch({headless: false});
    const page1 = await browser.newPage();
 
    await page1.goto('https://lincao-ta-codando.github.io/Apollo11/');
    
     await page1.waitForSelector('h1[class="constatado"]', { timeout: 300000 });

        
     
    const htmlresultante = await page1.content();
    const $ = cheerio.load(htmlresultante);
    const constatado = $('.constatado').text();
    const primeira = $('.primeira').text();//tentativa
    const ultima = $('.ultima').text();
    const defeito1 = $('.defeito1').text();
    const linha1 = +$('.linha1').text();
    const linha2 = $('.linha2').text();
    const linha3 = $('.linha3').text();
    const linha4 = $('.linha4').text();
    const linha5 = $('.linha5').text();
    const defeito2 = $('.defeito2').text();
    const linhadef2 = $('.linhadef2').text();
    const linhadef21 = $('.linhadef21').text();
    const linhadef22 = $('.linhadef22').text();
    const linhadef23 = $('.linhadef23').text();
    const linhadef24 = $('.linhadef24').text();

    const defeito3 = $('.defeito3').text();
    const linhadef3 = $('.linhadef3').text();
    const linhadef31 = $('.linhadef31').text();
    const linhadef32 = $('.linhadef32').text();
    const linhadef33 = $('.linhadef33').text();
    const linhadef34 = $('.linhadef34').text();
    const motivo1 = $('.motivo1').text();
    const motivo2 = $('.motivo2').text();
    const motivo3 = $('.motivo3').text();
    const motivo4 = $('.motivo4').text();
    const motivo5 = $('.motivo5').text();
    const servico1 = $('.servico1').text();
    const servico2 = $('.servico2').text();
    const servico3 = $('.servico3').text();
    const servico4 = $('.servico4').text();
    const servico5 = $('.servico6').text();

    const page = await browser.newPage();
    await page.setViewport({width: 1280, height: 800});
    //abre o navegador
    await page.goto('https://posvenda.telecontrol.com.br/assist/externos/login_posvenda_new.php');
    //faz o login
    await page.waitForSelector('input[name="login"]');
    await page.type('input[name="login"]', "********");
    await page.type('input[name="senha"]', "**********");
    await page.waitForSelector('button[type="submit"]');
    await page.click('button[type="submit"]');

    //cria loop para intervalo de "os_id"
    for (let os_id = primeira; os_id <= ultima; os_id++) {
    //navega até o link da os
    await page.waitForNavigation(300000);
    await page.goto(`https://posvenda.telecontrol.com.br/assist/cadastro_os.php?os_id=${os_id}`);
    await page.waitForSelector('select[name="os[tipo_atendimento]"');
    //preenche campos necessários
    await page.select('select[name="os[tipo_atendimento]"', '241');
    await page.type('input[name="os[defeito_reclamado]"]', constatado);
    await page.waitForTimeout(2000);
//seção do frame
    const tableId = 'resultados';
    const frameName = 'sb-player';

//ADICIONAR DEFEITO
    await page.select('select[name="produto[defeito_constatado]"]', defeito1);
    await page.click('#adicionar_defeito_constatado');
    await page.click('#btn_lista_basica');
    await page.waitForTimeout(8000);
    //se der, criar um código pra esperar abrir o frame
    //lógica para preenchimento das checkboxes
        //a linha 1 só clica com o código da linha 44
    if (linha1 === 1){
        const firstCheckboxHandle = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' td input[type="checkbox"]');
        await firstCheckboxHandle.click();
    } else {
        //já da linha 2 em diante é com esses códigos aq
        var tableRowSelector = `tr:nth-child(${linha1})`;
        const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
        const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
        await checkboxHandle1.click();
    };
    
        if(linha2){
            var tableRowSelector = `tr:nth-child(${linha2})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
        };
        if(linha3){
            var tableRowSelector = `tr:nth-child(${linha3})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
        };
        if(linha4){
            var tableRowSelector = `tr:nth-child(${linha4})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
        };
        if(linha5){
            var tableRowSelector = `tr:nth-child(${linha5})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
        };

        const frame1 = page.mainFrame().childFrames()[0];
        await frame1.click('button[type="button"][class="btn btn-success"]');

   

    //volta pra página
    await page.waitForTimeout(3000);

    if(defeito2){
    await page.select('select[name="produto[defeito_constatado]"]', `${defeito2}`);
    await page.click('#adicionar_defeito_constatado');
    await page.click('#btn_lista_basica');

    await page.waitForTimeout(3000);

    if (linhadef2 === 1){
        const firstCheckboxHandle = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' td input[type="checkbox"]');
        await firstCheckboxHandle.click();
    } else {
        //já da linha 2 em diante é com esses códigos aq
        var tableRowSelector = `tr:nth-child(${linhadef2})`;
        const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
        const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
        await checkboxHandle1.click();
    };
    if(linhadef21){
        var tableRowSelector = `tr:nth-child(${linhadef21})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
    };
    if(linhadef22){
        var tableRowSelector = `tr:nth-child(${linhadef22})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
    };
    if(linhadef23){
        var tableRowSelector = `tr:nth-child(${linhadef23})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
    };
    if(linhadef24){
        var tableRowSelector = `tr:nth-child(${linhadef24})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
    };

    const frame2 = page.mainFrame().childFrames()[0];
        await frame2.click('button[type="button"][class="btn btn-success"]');

    
    await page.waitForTimeout(2000);
    };
    if(defeito3){
    await page.select('select[name="produto[defeito_constatado]"]', '41837');
    await page.click('#adicionar_defeito_constatado');
    await page.click('#btn_lista_basica');

    await page.waitForTimeout(3000);

    if (linhadef3 === 1){
        const firstCheckboxHandle = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' td input[type="checkbox"]');
        await firstCheckboxHandle.click();
    } else {
        //já da linha 2 em diante é com esses códigos aq
        var tableRowSelector = `tr:nth-child(${linhadef3})`;
        const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
        const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
        await checkboxHandle1.click();
    };
    if(linhadef31){
        var tableRowSelector = `tr:nth-child(${linhadef31})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
    };
    if(linhadef32){
        var tableRowSelector = `tr:nth-child(${linhadef32})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
    };
    if(linhadef33){
        var tableRowSelector = `tr:nth-child(${linhadef33})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
    };
    if(linhadef34){
        var tableRowSelector = `tr:nth-child(${linhadef34})`;
    const tableRowHandle1 = await page.frames().find(f => f.name() === frameName).$('table#' + tableId + ' ' + tableRowSelector);
    const checkboxHandle1 = await tableRowHandle1.$('td input[type="checkbox"]');
    await checkboxHandle1.click();
    };

    const frame3 = page.mainFrame().childFrames()[0];
    await frame3.click('button[type="button"][class="btn btn-success"]');

    //volta pra página
    await page.waitForTimeout(2000);
    };
    
    //o primeiro sempre vai precisar preencher, então nao coloquei if
    await page.type('input[id="qtde_0"]', "1");
    await page.select('select[id="peca_defeitos_0"]', `${motivo1}`);
    await page.select('select[id="servicos_peca_0"]', `${servico1}`);//ajuste:11186, fora de garantia:11630, troca de peça: 11185.
    
    //já esses só funcionam se houver uma quantidade de peças maior que 1
    if(motivo2){
    await page.type('input[id="qtde_1"]', "1");
    await page.select('select[id="peca_defeitos_1"]', `${motivo2}`);
    await page.select('select[id="servicos_peca_1"]', `${servico2}`);
    };
    
    if(motivo3){
    await page.type('input[id="qtde_2"]', "1");
    await page.select('select[id="peca_defeitos_2"]', `${motivo3}`);
    await page.select('select[id="servicos_peca_2"]', `${servico3}`);
    };

    if(motivo4){
    await page.type('input[name="produto_pecas[3][qtde]"]', "1");
    await page.select('select[id="peca_defeitos_3"]', `${motivo4}`);
    await page.select('select[id="servicos_peca_3"]', `${servico4}`);
    };

    if(motivo5){
    await page.type('input[name="produto_pecas[4][qtde]"]', "1");
    await page.select('select[id="peca_defeitos_4"]', `${motivo5}`);
    await page.select('select[id="servicos_peca_4"]', `${servico5}`);
    };


    const gravar = 'input[type="button"][class="btn div_content"][value="Gravar"]';
    await page.click(gravar);
    };
})();
