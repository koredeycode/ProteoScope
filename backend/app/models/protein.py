from ..db import db


class Protein(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    sequence = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f'<Protein {self.name}>'
