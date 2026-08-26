from django.test import SimpleTestCase


def versandkosten(warenwert: float) -> float:
    """Ab 50 € versandkostenfrei, sonst 4,95 €."""
    if warenwert >= 50:
        return 0.0
    return 4.95


class VersandkostenTests(SimpleTestCase):
    def test_unter_grenze(self):
        self.assertEqual(versandkosten(20), 4.95)

    def test_genau_grenze(self):
        self.assertEqual(versandkosten(50), 0.0)

    def test_ueber_grenze(self):
        self.assertEqual(versandkosten(80), 0.0)

    def test_knapp_unter_grenze(self):
        self.assertEqual(versandkosten(49), 4.95)
