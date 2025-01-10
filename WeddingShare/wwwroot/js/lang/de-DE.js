﻿class Localization extends BaseLocalization {
    constructor() {
        super('de-DE', {
            "Loading": "Laden...",
            "Review": "Überprüfen",
            "Approve": "Genehmigen",
            "Reject": "Ablehnen",
            "Create": "Erstellen",
            "Import": "Importieren",
            "Export": "Exportieren",
            "Wipe": "Löschen",
            "Upload": "Hochladen",
            "Download": "Herunterladen",
            "Update": "Aktualisieren",
            "Cancel": "Abbrechen",
            "Close": "Schließen",
            "Delete": "Löschen",
            "Error": "Fehler",
            "Errors": "Fehler",
            "Login": "Anmelden",
            "Login_Invalid_Username": "Bitte geben Sie einen gültigen Benutzernamen ein",
            "Login_Invalid_Password": "Bitte geben Sie ein gültiges Passwort ein",
            "Login_Invalid_Details": "Ungültiger Benutzername oder Passwort angegeben",
            "Login_Failed": "Anmeldung fehlgeschlagen",
            "Identity_Check": "Identitätsprüfung",
            "Identity_Check_Name": "Name",
            "Identity_Check_Hint": "Sagen Sie uns, wer Sie sind, damit wir wissen, wer die Erinnerungen hochgeladen hat.",
            "Identity_Check_Placeholder": "z. B. Hans Mustermann, Stephen, Tante Claudia",
            "Identity_Check_Tell_Us": "Das bin ich!",
            "Identity_Check_Stay_Anonymous": "Anonym bleiben",
            "Identity_Check_Change_Identity": "Identität ändern",
            "Identity_Check_Change": "Ändern",
            "Identity_Check_Invalid_Name": "Ungültiger Name",
            "Identity_Check_Invalid_Name_Msg": "Bitte geben Sie einen gültigen Namen an",
            "Identity_Check_Set_Failed": "Benutzeridentität konnte nicht festgelegt werden",
            "Gallery": "Galerie",
            "Gallery_Name": "Galeriename",
            "Gallery_Name_Hint": "Bitte geben Sie einen neuen Galerienamen ein",
            "Gallery_Secret_Key": "Geheimschlüssel",
            "Gallery_Secret_Key_Hint": "Bitte geben Sie einen neuen Geheimschlüssel ein",
            "Gallery_Invalid_Name": "Bitte geben Sie einen gültigen Galerienamen an",
            "Gallery_Missing_Id": "Galerie-ID darf nicht leer sein",
            "Gallery_Missing_Name": "Galeriename darf nicht leer sein",
            "Gallery_Create": "Galerie erstellen",
            "Gallery_Create_Success": "Galerie erfolgreich erstellt",
            "Gallery_Create_Failed": "Galerie konnte nicht erstellt werden",
            "Gallery_Edit": "Galerie bearbeiten",
            "Gallery_Edit_Success": "Galerie erfolgreich aktualisiert",
            "Gallery_Edit_Failed": "Galerie konnte nicht aktualisiert werden",
            "Gallery_Wipe": "Inhalt der Galerie löschen",
            "Gallery_Wipe_Message": "Möchten Sie den Inhalt der Galerie '{name}' endgültig entfernen?",
            "Gallery_Wipe_Success": "Inhalt der Galerie erfolgreich entfernt",
            "Gallery_Wipe_Failed": "Inhalt der Galerie konnte nicht entfernt werden",
            "Gallery_Delete": "Galerie löschen",
            "Gallery_Delete_Message": "Möchten Sie die Galerie '{name}' endgültig löschen?",
            "Gallery_Delete_Success": "Galerie erfolgreich gelöscht",
            "Gallery_Delete_Failed": "Galerie konnte nicht gelöscht werden",
            "Upload_Progress": "Hochladen von Element {index} von {count}...",
            "Upload_Success": "{count} Element(e) erfolgreich hochgeladen",
            "Upload_Success_Pending_Review": "{count} Element(e) erfolgreich hochgeladen, Überprüfung ausstehend",
            "Upload_No_Files_Detected": "Keine Dateien zum Hochladen erkannt",
            "Upload_Invalid_Gallery_Detected": "Ungültige Galerie-ID erkannt",
            "Upload_Invalid_Upload_Url": "Upload-URL konnte nicht gefunden werden",
            "Review_Id_Missing": "Element-ID konnte nicht gefunden werden",
            "Review_Failed": "Überprüfung des Elements fehlgeschlagen",
            "Bulk_Review": "Schnellcheck",
            "Bulk_Review_Approve_Failed": "Das Genehmigen aller Elemente ist fehlgeschlagen",
            "Bulk_Review_Reject_Failed": "Das Ablehnen aller Elemente ist fehlgeschlagen",
            "Bulk_Review_Message": "Möchten Sie alle ausstehenden Elemente genehmigen oder ablehnen?",
            "Delete_Item": "Element löschen",
            "Delete_Item_Success": "Element erfolgreich gelöscht",
            "Delete_Item_Failed": "Element konnte nicht gelöscht werden",
            "Delete_Item_Message": "Möchten Sie '{name}' endgültig löschen?",
            "Delete_Item_Id_Missing": "Die ID darf nicht leer gelassen werden",
            "Import_Data": "Daten importieren",
            "Import_Data_Success": "Daten erfolgreich importiert",
            "Import_Data_Failed": "Daten konnten nicht importiert werden",
            "Import_Data_Backup_File": "Sicherungsdatei",
            "Import_Data_Backup_Hint": "Bitte wählen Sie eine WeddingShare-Sicherungsdatei aus",
            "Import_Data_Select_File": "Bitte wählen Sie eine Sicherungsdatei aus",
            "Export_Data": "Daten exportieren",
            "Export_Data_Success": "Daten erfolgreich exportiert",
            "Export_Data_Failed": "Daten konnten nicht exportiert werden",
            "Export_Data_Message": "Möchten Sie wirklich fortfahren?",
            "Wipe_Data": "Daten löschen",
            "Wipe_Data_Message": "Möchten Sie alle Daten dauerhaft löschen?",
            "Wipe_Data_Success": "Daten erfolgreich gelöscht",
            "Wipe_Data_Failed": "Daten konnten nicht gelöscht werden",
            "Download_Failed": "Galerie konnte nicht heruntergeladen werden",
            "Browser_Does_Not_Support": "Ihr Browser unterstützt diese Funktion nicht"
        });
    }
}

const localization = new Localization();