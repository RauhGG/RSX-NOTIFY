local Notifications_Boolean = false

exports('sendnotification', sendnoti)

function sendnoti(type, text)
    while (Notifications_Boolean) do
        Citizen.Wait(100)
    end
    SendNUIMessage({
        type = type,
        msg = text,
    })
end

RegisterCommand('testnoti', function(source, args)
    sendnoti(args[1], args[2])
    print("Cañota es muy Guapo")
end)
