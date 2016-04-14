import datetime

import requests
from splinter.exceptions import ElementDoesNotExist


def fill_and_submit_form(browser, fields, submit_button_name='submit'):
    for field in fields:
        function = field['function']
        name = field['name']
        if 'value' in field:
            value = field['value']
            getattr(browser, function)(name, value)
        else:
            getattr(browser, function)(name)
    browser.find_by_name(submit_button_name).first.click()


def assert_text_in_table(browser, fields, date_format='%m/%d/%Y'):
    rows = browser.find_by_css('tr')
    contains_test_obj = False
    failing_field = None

    for row in rows:
        if contains_test_obj:
            break
        for field in fields:
            field = field.strftime(date_format) if isinstance(field, datetime.date) else '%s' % field
            if field in row.text:
                contains_test_obj = True
                failing_field = field
                break

    assert contains_test_obj, "Couldn't find the test row in the table%s" % (
        ': ' + failing_field if failing_field else '')


def assert_text_not_in_table(browser, fields, date_format='%m/%d/%Y'):
    rows = browser.find_by_css('tr')
    contains_test_obj = False
    failing_field = None

    for row in rows:
        if contains_test_obj:
            break
        for field in fields:
            field = field.strftime(date_format) if isinstance(field, datetime.date) else '%s' % field
            if field in row.text:
                contains_test_obj = True
                failing_field = field
                break

    assert not contains_test_obj, "Found unexpected row in the table%s" % (
        ': ' + failing_field if failing_field else '')


def get_file_content_type(file_type):
    try:
        file_types = {
            'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'xls': 'application/vnd.ms-excel',
            'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'pdf': 'application/pdf',
        }
    except KeyError:
        return NotImplementedError

    return file_types[file_type]


def scroll_to_top(browser):
    browser.driver.execute_script("window.scrollTo(0, 0);")


def compare_content_types(browser, context, file_type):
    try:
        file_url = browser.find_by_name('download').first['href']
        result = requests.get(file_url, cookies=browser.cookies.all())
        received_type = result.headers['content-type']
    except ElementDoesNotExist:
        try:
            received_type = context.result.headers['content-type']
        except AttributeError:
            result = requests.get(context.url, cookies=browser.cookies.all())
            received_type = result.headers['content-type']
    target_type = get_file_content_type(file_type)

    return target_type, received_type
