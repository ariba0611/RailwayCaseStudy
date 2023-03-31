﻿namespace RailwayApi.Models.DAL
{
    public interface IRailwayRepository<T> where T : class
    {
        IEnumerable<T> GetModel();

        T GetModelByID(int ModelId);

        void InsertModel(T model);

        void UpdateModel(T model);
        void DeleteModel(int ModelId);
        void Save();


    }
}
