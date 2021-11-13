import { Datepicker } from 'vanillajs-datepicker'

(function () {
    function initializeDatePickers () {
        const commonOptions = {
            clearBtn: true,
        };

        const startDatePicker = new Datepicker(
            document.querySelector('#startDate'),
            { ...commonOptions },
        );
        const endDatePicker = new Datepicker(
            document.querySelector('#endDate'),
            { ...commonOptions },
        );

        const openStartDateBtn = document.querySelector('#openStartDate')
        const openEndDateBtn = document.querySelector('#openEndDate')
        const resetStartDateBtn = document.querySelector('#resetStartDate')
        const resetEndDateBtn = document.querySelector('#resetEndDate')

        openStartDateBtn.addEventListener('click', () => openPicker(startDatePicker))
        openEndDateBtn.addEventListener('click', () => openPicker(endDatePicker))

        resetStartDateBtn.addEventListener('click', () => resetPicker(startDatePicker))
        resetEndDateBtn.addEventListener('click', () => resetPicker(endDatePicker))

        function openPicker (picker) {
            picker.show()
        }

        function resetPicker (picker) {
            picker.setDate({
                clear: true,
            })
        }
    }

    function initializeEventsListViewToggles () {
        const eventsList = document.querySelector('#eventList')
        const eventsViewToggles = document.querySelectorAll(
            '[name="toggle-events-view"]')

        for (let button of eventsViewToggles) {
            if (button.dataset.viewType === 'grid') {
                button.addEventListener('click', () => {
                    deactivateButtons(button)
                    setEventsListViewType('grid')
                })
            }

            if (button.dataset.viewType === 'list') {
                button.addEventListener('click', () => {
                    deactivateButtons(button)
                    setEventsListViewType('list')
                })
            }
        }

        function deactivateButtons (activeButton) {
            for (let button of eventsViewToggles) {
                if (button === activeButton) {
                    button.setAttribute('disabled', 'true')
                } else {
                    button.removeAttribute('disabled')
                }
            }
        }

        function setEventsListViewType (viewType) {
            eventsList.dataset.currentViewType = viewType
        }
    }

    initializeDatePickers()
    initializeEventsListViewToggles()
})()




