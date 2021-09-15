import os
import sys
import json
from pathlib import Path


def build_types_base(name, project: str, _file):
    return """
import { Document, Model } from "mongoose";

export interface I%s { }

export interface I%sDocument extends I%s, Document {}
export interface I%sModel extends Model<I%sDocument> {}
    """ % (name, name, name, name, name)


def build_methods_base(name, project: str, _file):
    return """
import { Document } from "mongoose";
import { I%sDocument } from "@domain/%s/%s.types";
    """ % (name, project, _file)


def build_model_base(name, project: str, _file):
    return """
import { model } from "mongoose";
      
import { I%s } from "@domain/%s/%s.types";
import %sSchema from "@domain/%s/%s.schema";
      
export const %sModel = model<I%s>(
    "%s",
    %sSchema
);
    """ % (name, project, _file, name, project, _file, name, name, _file, name)


def build_static_base(name, project: str, _file):
    return """
import {
    I%sDocument,
    I%sModel,
} from "@domain/%s/%s.types";
    """ % (name, name, project, _file)


def build_schema_base(name, project: str, _file):
    return """
import { Schema } from "mongoose";

const %sSchema = new Schema({
});

export default %sSchema;
    """ % (name, name)


BUILDERS = {
    "static": build_static_base,
    "types": build_types_base,
    "model": build_model_base,
    "methods": build_methods_base,
    "schema": build_schema_base
}


def get_domain_project_path(project_name: str):
    base_path = Path(__file__).parent
    return os.path.join(base_path, 'src', 'domain', project_name)


def get_config(project: str):
    base_path = Path(__file__).parent
    base_project_config_path = os.path.join(base_path, "projects_configs", f"{project}_config.json")
    with open(base_project_config_path, "r") as f:
        data = json.load(f)
    return data


def create_project_domain_folder_if_not_exists(_project_path):
    if os.path.exists(_project_path):
        return
    print(f"Create project folder in -> {_project_path}")
    os.mkdir(project_path)


def write_objects(string_builder, _file, builder):
    _path = f"{_file}.{builder}.ts"
    print(f"build: {_path}")
    with open(_path, "w+") as f:
        f.write(string_builder.strip())


def mont_project_files(_configs: dict):
    for object_name, object_file in _configs["relational_objects"].items():
        for builder, cb in BUILDERS.items():
            file = os.path.join(get_domain_project_path(_configs["project"]), object_file)
            print(f"Builder: {builder} -> [ {object_name} --- {file} ]")
            string_builder = cb(object_name, _configs["project"], object_file)
            write_objects(string_builder, file, builder)

try:
    configs = get_config(sys.argv[1])
except Exception as err:
    print("Set project name with sys.argv")
    print(err)
    sys.exit(1)

project_path = get_domain_project_path(configs['project'])
create_project_domain_folder_if_not_exists(project_path)
mont_project_files(configs)

