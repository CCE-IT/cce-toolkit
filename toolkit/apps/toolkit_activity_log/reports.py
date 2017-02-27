from user_agents import parse

from toolkit.helpers.reports import generate_table, xlsx_response


class ActivityReports(object):
    ACTIVITY_COLUMNS = [
        ('Type', 'activity_type'),
        ('Activity', 'summary'),
        ('Description', 'description'),
        ('User Agent', lambda obj: str(parse(obj.user_agent)) if obj.user_agent else ''),
        ('IP Address', 'ip_address'),
        ('User', 'created_by'),
        ('Date/Time', 'created_at'),
    ]

    @classmethod
    def account_list_xlsx_report(cls, qs, form):
        data = generate_table(
            columns=cls.ACTIVITY_COLUMNS,
            data=qs,
            suppress_attr_errors=True
        )
        return xlsx_response('activity_report', data)
