﻿/* Bootstrap 5 JS included */

('use strict');

// Drag and drop - single or multiple image files
// https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
// https://codepen.io/joezimjs/pen/yPWQbd?editors=1000
(function () {

    'use strict';

    // Four objects of interest: drop zones, input elements, gallery elements, and the files.
    // dataRefs = {files: [image files], input: element ref, gallery: element ref}

    const preventDefaults = event => {
        event.preventDefault();
        event.stopPropagation();
    };

    const triggerSelector = event => {
        const zone = event.target.closest('.upload_drop') || false;
        const input = zone.querySelector('input[type="file"]') || false;
        input.click();
    }

    const highlight = event =>
        event.target.classList.add('highlight');

    const unhighlight = event =>
        event.target.classList.remove('highlight');

    const getInputAndGalleryRefs = element => {
        const zone = element.closest('.upload_drop') || false;
        const gallery = zone.querySelector('.upload_gallery') || false;
        const input = zone.querySelector('input[type="file"]') || false;
        return { input: input, gallery: gallery };
    }

    const handleDrop = event => {
        const dataRefs = getInputAndGalleryRefs(event.target);
        dataRefs.files = event.dataTransfer.files;
        handleFiles(dataRefs);
    }

    const eventHandlers = zone => {

        const dataRefs = getInputAndGalleryRefs(zone);

        if (!dataRefs.input) return;

        // Prevent default drag behaviors
        ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
            zone.addEventListener(event, preventDefaults, false);
            document.body.addEventListener(event, preventDefaults, false);
        });

        // Open file browser on drop area click
        ;['click', 'touch'].forEach(event => {
            zone.addEventListener(event, triggerSelector, false);
        });
        // Highlighting drop area when item is dragged over it
        ;['dragenter', 'dragover'].forEach(event => {
            zone.addEventListener(event, highlight, false);
        });
        ;['dragleave', 'drop'].forEach(event => {
            zone.addEventListener(event, unhighlight, false);
        });

        // Handle dropped files
        zone.addEventListener('drop', handleDrop, false);

        // Handle browse selected files
        dataRefs.input.addEventListener('change', event => {
            dataRefs.files = event.target.files;
            handleFiles(dataRefs);
        }, false);

    }

    // Initialise ALL dropzones
    const dropZones = document.querySelectorAll('.upload_drop');
    for (const zone of dropZones) {
        eventHandlers(zone);
    }

    // No 'image/gif' or PDF or webp allowed here, but it's up to your use case.
    // Double checks the input "accept" attribute
    const isImageFile = file => ['image/jpeg', 'image/png'].includes(file.type);

    function previewFiles(dataRefs) {
        if (!dataRefs.gallery) return;
        for (const file of dataRefs.files) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                let img = document.createElement('img');
                img.className = 'upload_img mt-2';
                img.setAttribute('alt', file.name);
                img.src = reader.result;
                dataRefs.gallery.appendChild(img);
            }
        }
    }

    // Based on: https://flaviocopes.com/how-to-upload-files-fetch/
    const imageUpload = dataRefs => {

        // Multiple source routes, so double check validity
        if (!dataRefs.files || !dataRefs.input) {
            displayMessage(`Upload`, `No files were detected to upload`);
            return;
        }

        const galleryId = dataRefs.input.getAttribute('data-post-gallery-id');
        if (!galleryId) {
            displayMessage(`Upload`, `Invalid gallery Id detected`);
            return;
        }

        const url = dataRefs.input.getAttribute('data-post-url');
        if (!url) {
            displayMessage(`Upload`, `Could not find upload Url`);
            return;
        }

        const formData = new FormData();
        formData.append('GalleryId', galleryId);
        for (var i = 0; i < dataRefs.files.length; i++) {
            formData.append(dataRefs.files[i].name, dataRefs.files[i]);
        }

        $('body').loading('start');

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                $('body').loading('stop');

                if (data.success === true) {
                    displayMessage(`Upload`, `Successfully uploaded ${data.uploaded} photos`, data.errors);
                } else if (data.message) {
                    displayMessage(`Upload`, `Upload failed`, [data.message]);
                }
            })
            .catch(error => {
                $('body').loading('stop');
                displayMessage(`Upload`, `Upload failed`, [error]);
            });
    }

    // Handle both selected and dropped files
    const handleFiles = dataRefs => {

        let files = [...dataRefs.files];

        // Remove unaccepted file types
        files = files.filter(item => {
            if (!isImageFile(item)) {
                console.log('Not an image, ', item.type);
            }
            return isImageFile(item) ? item : null;
        });

        if (!files.length) return;
        dataRefs.files = files;

        previewFiles(dataRefs);
        imageUpload(dataRefs);
    }

    function displayMessage(title, message, errors) {
        $('#alert-message-modal .modal-title').text(title);
        $('#alert-message-modal .modal-message').html(message);

        $('#alert-message-modal .modal-error').hide();
        if (errors && errors.length > 0) {
            var errorMessage = `<b>Errors:</b>`;
            errorMessage += `<ul>`;
            errors.forEach((error) => {
                errorMessage += `<li>${error}</li>`;
            });
            errorMessage += `</ul>`;
            $('#alert-message-modal .modal-error').html(errorMessage);
            $('#alert-message-modal .modal-error').show();
        } else {
            $('#alert-message-modal .modal-error').html('');
        }

        $('#alert-message-modal').modal('show');
    }

    function uuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
    }

    $(document).off('click', '.btn-reload').on('click', '.btn-reload', function () {
        window.location.reload();
    });

    $(document).off('click', '#btnGenerateGalleryName').on('click', '#btnGenerateGalleryName', function (e) {
        preventDefaults(e);
        $('input#gallery-id').val(uuidv4());
    });

    $(document).off('submit', '#frmSelectGallery').on('submit', '#frmSelectGallery', function (e) {
        preventDefaults(e);

        var galleryId = $('input#gallery-id').val();
        if (galleryId && galleryId.length > 0) {
            window.location = `/Home/Gallery?id=${galleryId}`;
        } else {
            displayMessage(`Gallery`, `Please select a valid gallery name`);
        }
    });

    $('body').loading({
        theme: 'dark',
        message: 'Uploading...',
        stoppable: false,
        start: false
    });

    lightbox.option({
        'disableScrolling': true
    })
})();