def VERIFICAR_OFFLINES(placas, placa, rows, devices_status):
     # SE O RASTREADOR FOR PRINCIPAL ELE VAI EXECUTAR O QUE TÁ DENTRO DO IF (ELE VAI PROCURAR PELO PRINCIPAL)
    if placas[placa][1] == 'RASTREADOR PRINCIPAL':      
            if len(devices_status) > 2:
                # SE TIVER O RASTREADOR PRINCIPAL, SOMBRA E LORAWAN ELE VAI EXECUTAR O QUE ESTÁ DENTRO DESSE ELIF
                
                # Acesse os <td> específicos dentro dos <tr> desejados
            
                td1 = rows[1].find_elements(By.TAG_NAME, 'td')[2]
                td2 = rows[3].find_elements(By.TAG_NAME, 'td')[2]
                td3 = rows[5].find_elements(By.TAG_NAME, 'td')[2]

                tds = [[td1, 0],[td2, 1],[td3, 2]]
    
                for index, td in enumerate(tds):
                    #print(index, td[0].text)

                    td_texto = td[0].text.lower()
    
                    if td_texto.find('sombra') == -1 and td_texto.find('lorawan') == -1:
                        status = devices_status[td[1]].get_attribute("data-original-title")
                        if status == 'Off-line':
                            print(td[0].text+' ESTÁ OFFLINE !')
                            print(devices_status[td[1]].get_attribute("data-original-title"))
                            print(td[1])
                            print('------------')
                            break
            elif len(devices_status) == 2:
                # SE TIVER O RASTREADOR PRINCIPAL E SOMBRA ELE VAI EXECUTAR O QUE ESTÁ DENTRO DESSE ELIF
                
                # Acesse os <td> específicos dentro dos <tr> desejados
            
                td1 = rows[1].find_elements(By.TAG_NAME, 'td')[2]
                td2 = rows[3].find_elements(By.TAG_NAME, 'td')[2]
    
                tds = [[td1, 0],[td2, 1]]
    
                for index, td in enumerate(tds):
                    #print(index, td[0].text)

                    td_texto = td[0].text.lower()
    
                    if td_texto.find('sombra') == -1:
                        status = devices_status[td[1]].get_attribute("data-original-title")
                        if status == 'Off-line':
                            print(td[0].text+' ESTÁ OFFLINE !')
                            print(devices_status[td[1]].get_attribute("data-original-title"))
                            print(td[1])
                            print('------------')
                            break
            elif len(devices_status) == 1:
                # SE TIVER APENAS O RASTREADOR PRINCIPAL ELE VAI EXECUTAR O QUE ESTÁ DENTRO DESSE ELIF
                
                # Acesse os <td> específicos dentro dos <tr> desejados
    
                td1 = rows[1].find_elements(By.TAG_NAME, 'td')[2]
                status = devices_status[0].get_attribute("data-original-title")
    
                if status == 'Off-line':
                    print(td1.text+' ESTÁ OFFLINE !')
                    print(devices_status[0].get_attribute("data-original-title"))
                    print('0')
                    print('------------')
    # SE O RASTREADOR NÃO FOR PRINCIPAL, ENTÃO ELE VAI EXECUTAR O QUE TÁ DENTRO DO ELSE (ELE VAI PROCURAR PELO SOMBRA)
    else:
            if len(devices_status) > 2:
                # SE TIVER O RASTREADOR SOMBRA, PRINCIPAL E LORAWAN ELE VAI EXECUTAR O QUE ESTÁ DENTRO DESSE ELIF
                
                # Acesse os <td> específicos dentro dos <tr> desejados
            
                td1 = rows[1].find_elements(By.TAG_NAME, 'td')[2]
                td2 = rows[3].find_elements(By.TAG_NAME, 'td')[2]
                td3 = rows[5].find_elements(By.TAG_NAME, 'td')[2]
            
                tds = [[td1, 0],[td2, 1],[td3, 2]]
    
                for index, td in enumerate(tds):
                    #print(index, td[0].text)

                    td_texto = td[0].text.lower()
    
                    if td_texto.find('sombra') != -1:
                        status = devices_status[td[1]].get_attribute("data-original-title")
                        if status == 'Off-line':
                            print(td[0].text+' ESTÁ OFFLINE !')
                            print(devices_status[td[1]].get_attribute("data-original-title"))
                            print(td[1])
                            print('------------')
                            break
            else:
                # SE TIVER O RASTREADOR SOMBRA E PRINCIPAL ELE VAI EXECUTAR O QUE ESTÁ DENTRO DESSE ELIF
                # SE CASO FOR SOMBRA E NÃO TIVER MAIS 2 RASTREADORES, SEMPRE VAI TER O PRINCIPAL... NO FINAL SÃO 2 RASTREADORES
                
                # Acesse os <td> específicos dentro dos <tr> desejados
            
                td1 = rows[1].find_elements(By.TAG_NAME, 'td')[2]
                td2 = rows[3].find_elements(By.TAG_NAME, 'td')[2]
    
                tds = [[td1, 0],[td2, 1]]
    
                for index, td in enumerate(tds):
                    #print(index, td[0].text)

                    td_texto = td[0].text.lower()
    
                    if td_texto.find('sombra') != -1:
                        status = devices_status[td[1]].get_attribute("data-original-title")
                        if status == 'Off-line':
                            print(td[0].text+' ESTÁ OFFLINE !')
                            print(devices_status[td[1]].get_attribute("data-original-title"))
                            print(td[1])
                            print('------------')
                            break

print('FUNÇÃO VERIFICAR OFFLINES TESTE DO GITHUB CARREGADO COM SUCESSO !')
print('------------')
