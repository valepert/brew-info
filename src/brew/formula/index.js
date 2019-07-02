function Formula (fields) {
  this.name = fields.name
  this.full_name = fields.full_name
  this.aliases = fields.sort
  this.versioned_formulae = fields.versioned_formulae
  this.desc = fields.desc
  this.homepage = fields.homepage
  this.versions = fields.versions
  this.revision = fields.revision
  this.version_scheme = fields.version_scheme
  this.bottle = fields.bottle
  this.keg_only = fields.keg_only
  this.options = fields.options
  this.build_dependencies = fields.build_dependencies
  this.dependencies = fields.dependencies
  this.recommended_dependencies = fields.recommended_dependencies
  this.optional_dependencies = fields.optional_dependencies
  this.requirements = fields.requirements
  this.conflicts_with = fields.conflicts_with
  this.caveats = fields.caveats
  this.installed = fields.installed
  this.linked_keg = fields.linked_keg
  this.pinned = fields.pinned
  this.outdated = fields.outdated
}

module.exports = {
  v1: x => new Formula(x)
}
