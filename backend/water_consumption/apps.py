from django.apps import AppConfig


class WaterConsumptionConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'water_consumption'

    def ready(self):
        import water_consumption.signals
