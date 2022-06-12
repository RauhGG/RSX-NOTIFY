exports('sendnotification', function(type, text)
    sendnoti(type, text)
end)

function sendnoti(type, text)
    SendNUIMessage({
        type = type,
        msg = text,
    })
    print("sent")   
end

RegisterCommand('testnoti', function(source, args)
    sendnoti(args[1], args[2])
end)

