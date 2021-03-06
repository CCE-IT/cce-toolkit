from behave import *
from django.contrib.auth.models import Group

from toolkit.apps.toolkit_activity_log.models import ToolkitActivityLog, ToolkitActivityType

use_step_matcher("re")


@when("I create a log item")
def create_log_item(context):
    ToolkitActivityLog.create_log(
        summary="Test Summary",
        description="Test Description",
        activity_type=ToolkitActivityType.objects.create(activity_type='Test'),
        content_type_model=Group,
        object_id=1,
    )


@then("that log item should exist")
def verify_log_item(context):
    expected_log_count = 1
    log_count = ToolkitActivityLog.objects.count()
    assert log_count == expected_log_count, "Log Entries | Expected: %s , Found: %s" % (expected_log_count, log_count)
